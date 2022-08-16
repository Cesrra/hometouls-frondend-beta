import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseAuthComponent } from './presentation/layout/base-auth/base-auth.component';
import { BaseLoggedComponent } from './presentation/layout/base-logged/base-logged.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  {
    path: '',
    component: BaseLoggedComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./presentation/features/home/home.module').then(
            (m) => m.HomeModule
          ),
      }
    ]
  },
  {
    path: 'auth',
    component: BaseAuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./presentation/features/auth/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'singup',
        loadChildren: () =>
        import('./presentation/features/auth/singup/singup.module').then(
          (m) => m.SingupModule
        )
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

  // { path: 'create-employee', component: EmployeeCreateComponent },
  // { path: 'employees-list', component: EmployeeListComponent },
  // { path: 'edit-employee/:id', component: EmployeeEditComponent },
