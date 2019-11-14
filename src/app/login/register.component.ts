import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';


declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) {}

  sonIguales(field1: string, field2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[field1].value;
      let pass2 = group.controls[field2].value;

      if (pass1 === pass2) {
        return null;
      } else {
        return {
          sonIguales: true
        };
      }
    };
  }

  ngOnInit() {
    init_plugins();
    this.registerForm = new FormGroup(
      {
        nombre: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        conditions: new FormControl(false)
      },
      { validators: this.sonIguales('password', 'password2') }
    );

    this.registerForm.setValue({
      nombre: 'test',
      email: 'test@text.com',
      password: '123456',
      password2: '123456',
      conditions: true
    });
  }

  registrarUsuario() {
    // TODO: Use EventEmitter with form value
    // console.log('Register Form valid:', this.registerForm.valid);

    if (this.registerForm.invalid) {
      return;
    }
    if (!this.registerForm.value.conditions) {
      // console.log('debe de aceptar las condiciones');
      Swal.fire({
        title: 'Importante!',
        text: 'Debe de aceptar las condiciones',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
      return;
    }
    let usuario = new Usuario(this.registerForm.value.nombre, this.registerForm.value.email, this.registerForm.value.password);
    this._usuarioService.crearUsuario(usuario).subscribe(
      resp => {
        this.router.navigate(['/login']);
        console.log(resp);
      }
    );


    // console.warn(this.registerForm.value);
  }
}
