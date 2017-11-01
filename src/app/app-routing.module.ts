import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'


const routes: Routes = [
  // {path: 'login', loadChildren: 'app/login/login.component'},
  { path: 'login', component: LoginComponent },
  // { path: '', component: LoginComponent },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true
};


@NgModule({
  imports: [RouterModule.forRoot(
    routes,config)],
  exports: [RouterModule], 
})
export class AppRoutingModule {
}

