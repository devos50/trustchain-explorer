import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlockdetailsComponent} from './blockdetails/blockdetails.component';
import {UserdetailsComponent} from './userdetails/userdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blocks/:hash', component: BlockdetailsComponent },
  { path: 'users/:pubkey', component: UserdetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
