import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './menu/about/about.component';
import { ChildComponent } from './menu/child/child.component';
import { MainComponent } from './menu/main/main.component';
import { ManComponent } from './menu/man/man.component';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
import { SigninComponent } from './menu/signin/signin.component';
import { WomanComponent } from './menu/woman/woman.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'child', component: ChildComponent },
  { path: 'main', component: MainComponent },
  { path: 'detile/:id', component: DetailsComponent },
  { path: 'man', component: ManComponent },
  { path: 'woman', component: WomanComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
