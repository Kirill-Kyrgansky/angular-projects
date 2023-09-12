import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'todo', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)},
  {path: 'login', loadChildren:()=> import('./login-form/login-form.module').then(m=> m.LoginFormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
