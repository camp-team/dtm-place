import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage/mypage.component';
import { NoteComponent } from './note/note.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { MatChipsModule } from '@angular/material/chips';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MyArticleComponent } from './my-article/my-article.component';
import { LikesArticleComponent } from './likes-article/likes-article.component';

@NgModule({
  declarations: [MypageComponent, NoteComponent, MyArticleComponent, LikesArticleComponent],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    SharedModule,
    MatTabsModule,
    FroalaViewModule,
    MatChipsModule,
    ClipboardModule
  ],
})
export class MypageModule { }
