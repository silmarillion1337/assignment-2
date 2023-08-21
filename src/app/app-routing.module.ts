import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offer-ride', component: OfferRideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
