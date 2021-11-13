import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuarioDTO } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + 'usuarios';

  public obtenerTodos() {
    return this.http.get<usuarioDTO[]>(`${this.apiURL}/getUsuarios`);
  }
}