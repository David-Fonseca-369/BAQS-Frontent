import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniasService } from 'src/app/companias/companias.service';
import { RolesService } from 'src/app/roles/roles.service';
import { usuarioDTO } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  roles: import('d:/Espacio_de_trabajo/BAQS-Frontend/BAQS-Frontend/src/app/roles/rol').rolDTO[];
  companias: import('d:/Espacio_de_trabajo/BAQS-Frontend/BAQS-Frontend/src/app/companias/compania').companiaDTO[];

  constructor(
    private formBuilder: FormBuilder,
    private rolesService: RolesService,
    private companiasService: CompaniasService,
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  form: FormGroup;
  modelo: usuarioDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idRol: ['', { validators: [Validators.required] }],
      idCompania: ['', { validators: [Validators.required] }],
      nombre: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required, Validators.email] }],
      _Password: ['', { validators: [Validators.required] }],
    });

    this.getRoles();
    this.getCompanias();
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.activatedRoute.params.subscribe((params) => {
      this.usuariosService.obtenerPorId(params.id).subscribe(
        (usuario) => {
          this.modelo = usuario;
          //Actualizar el formulario con los datos recibidos
          this.form.patchValue(this.modelo);
        },
        () => this.router.navigate(['/usuarios'])
      );
    });
  }

  getRoles() {
    this.rolesService.getRoles().subscribe(
      (roles) => {
        this.roles = roles;
        console.log(this.roles);
      },
      (error) => console.log(error)
    );
  }

  getCompanias() {
    this.companiasService.getCompanias().subscribe(
      (companias) => {
        this.companias = companias;
      },
      (error) => console.log(error)
    );
  }

  editarUsuario() {}
}
