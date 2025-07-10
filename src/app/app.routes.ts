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
    {path:'our-team', loadComponent:()=>import('./views/team/team.component').then((m)=>m.TeamComponent)}
  ]}
];
