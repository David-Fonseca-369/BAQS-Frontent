import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginDTO, respuestaAutenticacionDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private seguridadService: SeguridadService,
    private router: Router
  ) {}

  form: FormGroup;

  hide = true;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', { validators: [Validators.required] }],
      password: ['', { validators: [Validators.required] }],
    });
  }

  login() {
    this.seguridadService.login(this.form.value).subscribe(
      (response) => {
        this.seguridadService.guardarToken(response);

        this.router.navigate(['/landingPage']);
      },
      (errores) => console.log(errores)
    );
  }
}
