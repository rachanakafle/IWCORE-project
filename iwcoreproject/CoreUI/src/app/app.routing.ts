import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { AuthGuard } from "./_services/auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500"
    }
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page"
    }
  },

  
  {
    path: "",
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Home"
    },
    children: [
      {
        path: "base",
        loadChildren: "./views/base/base.module#BaseModule"
      },
      {
        path: "buttons",
        loadChildren: "./views/buttons/buttons.module#ButtonsModule"
      },
      {
        path: "charts",
        loadChildren: "./views/chartjs/chartjs.module#ChartJSModule"
      },
        {
        path: 'partners',
        loadChildren: './views/partners/partners.module#PartnersModule'
      },
      {
        path: 'projects',
        loadChildren: './views/projects/projects.module#ProjectsModule'
      },
        {
        path: 'projectmanagers',
        loadChildren: './views/projectmanagers/projectmanagers.module#ProjectmanagersModule'
      },
      {
        path: "developers",
        loadChildren: "./views/developers/developers.module#DevelopersModule"
      },
      {
        path: "all-users",
        loadChildren: "./views/users/users.module#UsersModule"
      },
      {
        path: "dashboard",
        loadChildren: "./views/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "icons",
        loadChildren: "./views/icons/icons.module#IconsModule"
      },
      {
        path: "notifications",
        loadChildren:
          "./views/notifications/notifications.module#NotificationsModule"
      },
      {
        path: "theme",
        loadChildren: "./views/theme/theme.module#ThemeModule"
      },
      {
        path: "widgets",
        loadChildren: "./views/widgets/widgets.module#WidgetsModule"
      }
    ]
  },
  { path: "**", component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
