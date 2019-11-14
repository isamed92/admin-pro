import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(public http: HttpClient) {
    console.log('Servicio de usuario listo');
  }

  crearUsuario(usuario: Usuario) {
    let url = `${URL_SERVICES}/usuario`;
    return this.http.post(url, usuario)
                        .pipe(map((resp: any) => {
                          Swal.fire('Usuario Creado', usuario.email, 'success');
                          return resp.usuario;
                        }));
  }
}
