import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaqsComponent } from './baqs/baqs.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login/login.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landingPage', component: LandingPageComponent },

  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuarios/crear', component: CrearUsuarioComponent },
  { path: 'usuarios/editar/:id', component: EditarUsuarioComponent },

  { path: 'baqs', component: BaqsComponent },
  { path: 'programacion', component: ProgramacionComponent },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
