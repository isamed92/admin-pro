import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  remenberMe: boolean = false;
  email: string;
  constructor(public router: Router, public _userService: UsuarioService) {}

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';
    if(this.email.length > 1){
      this.remenberMe = true;
    }

  }

  ingresar(form: NgForm) {
    // console.log(form.valid);
    // console.log(form.value);
    if (form.invalid) {
      return;
    }
    let usuario = new Usuario(null, form.value.email, form.value.password);
    this._userService.login(usuario, this.remenberMe).subscribe(respuesta => {
      // console.log(respuesta);

      this.router.navigateByUrl('/dashboard');
    });
  }
}
