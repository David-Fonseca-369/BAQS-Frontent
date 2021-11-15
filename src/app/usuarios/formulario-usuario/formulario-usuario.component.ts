import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { companiaDTO } from 'src/app/companias/compania';
import { CompaniasService } from 'src/app/companias/companias.service';
import { rolDTO } from 'src/app/roles/rol';
import { RolesService } from 'src/app/roles/roles.service';
import { usuarioCreacionDTO } from '../usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css'],
})
export class FormularioUsuarioComponent implements OnInit {
  roles: rolDTO[];
  companias: companiaDTO[];

  selectedRolId: number;
  selectedCompaniaId: number;

  constructor(
    private formBuilder: FormBuilder,
    private rolesService: RolesService,
    private companiasService: CompaniasService
  ) {}

  form: FormGroup;

  @Output() //Emitir infromación al formulario padre.
  formularioHijo: EventEmitter<usuarioCreacionDTO> = new EventEmitter<usuarioCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idRol: ['', { validators: [Validators.required] }],
      idCompania: ['', { validators: [Validators.required] }],
      nombre: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required] }],
      _Password: ['', { validators: [Validators.required] }],
    });

    this.getRoles();
    this.getCompanias();
  }

  enviarDatos() {
    this.formularioHijo.emit(this.form.value);
  }

  getRoles() {
    this.rolesService.getRoles().subscribe(
      (roles) => {
        this.roles = roles;
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
}
