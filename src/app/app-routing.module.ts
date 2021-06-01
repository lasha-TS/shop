import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './menu/about/about.component';
import { ChildComponent } from './menu/child/child.component';
import { MainComponent } from './menu/main/main.component';
import { ManComponent } from './menu/man/man.component';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
import { WomanComponent } from './menu/woman/woman.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'child', component: ChildComponent },
  { path: 'main', component: MainComponent },
  { path: 'man', component: ManComponent },
  { path: 'woman', component: WomanComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
