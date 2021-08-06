import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { ResultTemplatesComponent } from './views/admin/result-templates/result-templates.component';
import { ResultsComponent } from './views/admin/results/results.component';
import { LandingComponent } from './views/landing/landing.component';
import { MonitorsComponent } from './views/monitors/monitors.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "categories", component: DashboardComponent },
      { path: "rules", component: DashboardComponent },
      { path: "races", component: DashboardComponent },
      { path: "seasons", component: DashboardComponent },
      { path: "teams", component: DashboardComponent },
      { path: "results", component: ResultsComponent },
      { path: "result-templates", component: ResultTemplatesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  { path: "monitors", component: MonitorsComponent },
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
