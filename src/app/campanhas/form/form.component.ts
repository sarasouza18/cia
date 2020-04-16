import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CriarCampanhaAction } from '../campanhas.actions';

@Component({
  selector: 'campanhas-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>
  ) {}

  addForm: FormGroup;
  true: boolean;
  false: boolean;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      descricao: [''],
      data_inicial: [''],
      data_final: [''],
      franqueador_id: [],
      referencia: [''],
      campanha_tipo_id: [],
      quantidade: [''],
      valor: [''],
      desconto: [''],
      nd_id: [],
      status: [''],
      id_microvix: [],
      percentual_impostos_custo: [''],
      rebate_por_target: []
    });

    this.true = true;
    this.false = false;
  }

  onSubmit() {
    /*
    this.campanhaService.createCampanha(this.addForm.value).subscribe(data => {
      this.router.navigate(['campanha']);
    });
    */
    this.store.dispatch(new CriarCampanhaAction(this.addForm.value));
  }
}
