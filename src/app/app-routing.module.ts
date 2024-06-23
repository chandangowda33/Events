import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { EventComponent } from './event/event.component';
import { DetailedEventComponent } from './detailed-event/detailed-event.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'eventTheme', component: EventComponent },
  { path: 'detailedTheme', component: DetailedEventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
