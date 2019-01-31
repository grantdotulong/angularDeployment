import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RootComponent } from './root/root.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'products',component: RootComponent },
  { path: 'products/:id/edit',component: EditComponent },
  { path: 'products/new',component: CreateComponent },
  { path: 'products/:id',component: DetailsComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '**', pathMatch: 'full', redirectTo: '/products' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }