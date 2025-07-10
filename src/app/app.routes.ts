import { Routes } from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';
import {MainComponent} from './views/main/main.component';

export const routes: Routes = [
  {path:'', component: LayoutComponent,
  children: [
    {path: '', component: MainComponent},
    {path:'about-us', loadComponent: ()=>import('./views/about/about.component').then((m)=>m.AboutComponent)},
    {path:'shop', loadComponent:()=>import('./views/shop/shop.component').then((m)=>m.ShopComponent)},
    {path:'blog', loadComponent:()=>import('./views/blog/blog.component').then((m)=>m.BlogComponent)},
    {path:'blog-article/:id', loadComponent:()=>import('./views/blog-article/blog-article.component').then((m)=>m.BlogArticleComponent)},
    {path:'our-team', loadComponent:()=>import('./views/team/team.component').then((m)=>m.TeamComponent)},
    {path:'services', loadComponent:()=>import('./views/services/services.component').then((m)=>m.ServicesComponent)},
    {path:'contact-us', loadComponent:()=>import('./views/contact-us/contact-us.component').then((m)=>m.ContactUsComponent)},
    {path:'licenses', loadComponent:()=>import('./views/licenses/licenses.component').then((m)=>m.LicensesComponent)},
    {path:'changelog', loadComponent:()=>import('./views/changelog/changelog.component').then((m)=>m.ChangelogComponent)},
    {path:'password-protected', loadComponent:()=>import('./views/password-protected/password-protected.component').then((m)=>m.PasswordProtectedComponent)},
    {path:'**', loadComponent:()=>import('./views/not-found/not-found.component').then((m)=>m.NotFoundComponent)}
  ]}
];
