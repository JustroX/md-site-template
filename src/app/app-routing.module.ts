import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { GhostViewAuthor } from './plugins/ghost/pages/ghost-view-author/ghost-view-author.component';
import { GhostViewPageList } from './plugins/ghost/pages/ghost-view-page-list/ghost-view-page-list.component';
import { GhostViewPage } from './plugins/ghost/pages/ghost-view-page/ghost-view-page.component';
import { GhostViewPost } from './plugins/ghost/pages/ghost-view-post/ghost-view-post.component';
import { GhostViewTag } from './plugins/ghost/pages/ghost-view-tag/ghost-view-tag.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view/main',
  },
  {
    path: 'view',
    children: [
      {
        path: '**',
        component: ContentComponent,
        runGuardsAndResolvers: 'always',
      },
    ],
  },
  {
    path: 'g',
    children: [
      {
        path: 'post',
        children: [
          {
            path: 'slug/:slug',
            component: GhostViewPost,
          },
          {
            path: ':id',
            component: GhostViewPost,
          },
        ],
      },
      {
        path: 'page',
        children: [
          {
            path: 'all',
            component: GhostViewPageList,
          },
          {
            path: 'slug/:slug',
            component: GhostViewPage,
          },
          {
            path: ':id',
            component: GhostViewPage,
          },
        ],
      },
      {
        path: 'author',
        children: [
          {
            path: ':slug',
            component: GhostViewAuthor,
          },
        ],
      },
      {
        path: 'tag',
        children: [
          {
            path: ':slug',
            component: GhostViewTag,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
