import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader: boolean;
  showFooter: boolean;

  loading$ = this.loadingService.loading$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private meta: Meta,
    @Inject(DOCUMENT) private document: HTMLDocument
  ) { }

  ngOnInit(): void {
    // iOSのAutoZoom対策
    const ua = window.navigator.userAgent.toLowerCase();
    const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1;
    if (isiOS) {
      const viewport = this.document.querySelector('meta[name="viewport"]');
      if (viewport) {
        const viewportContent = viewport.getAttribute('content');
        viewport.setAttribute(
          'content',
          viewportContent + ', user-scalable=no'
        );
      }
    }
    if (!environment.production) {
      this.meta.addTag({
        name: 'robots',
        content: 'noindex',
      });
      this.document
        .querySelector('[rel=icon]')
        ?.setAttribute('href', 'favicon-dev.svg');
    }
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader =
          this.route.snapshot.firstChild?.firstChild?.data.showHeader !== false;
        this.showFooter =
          this.route.snapshot.firstChild?.firstChild?.data.showFooter !== false;
      }
    });
  }
}
