import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query
} from '@angular/animations';
import { from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Campanha } from '../campanha';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CampanhaState, selectCampanhasAll } from '../campanhas.state';
import { BuscarCampanhasAction } from '../campanhas.actions';
import { AppState } from '@app/core/core.state';
import {
  distinctUntilChanged,
  map,
  filter,
  switchMap,
  first,
  tap,
  share
} from 'rxjs/operators';

@Component({
  selector: 'campanhas-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('sideMenuAnime', [
      state('false', style({ width: '0px', visibility: 'hidden' })),
      state('true', style({ width: '100%' })),

      transition('true => false', animate('10ms ease-in')),
      transition('false => true', animate('600ms ease-out'))
    ]),
    trigger('mainContainerAnime', [
      state('false', style({ marginLeft: '0px' })),
      // state('true', style({marginLeft:'250px'})),

      transition('true => false', animate('10ms ease-in')),
      transition('false => true', animate('600ms ease-out'))
    ])
  ]
})
export class SearchComponent implements OnInit {
  pesquisaOpened: boolean = true;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  campanha: any;
  findForm: FormGroup = this.formBuilder.group({
    descricao: '',
    data_inicial: null,
    data_final: null,
    franqueador_id: null,
    referencia: '',
    quantidade: null,
    valor: null,
    nd_id: null,
    status: '',
    desconto: null,
    id_microvix: null,
    percentual_impostos_custo: null,
    rebate_por_target: null
  });
  teste: any;
  campanhaSearch: FormGroup;
  contador: number;
  contador$;
  campanhas$ = this.store.select(selectCampanhasAll);
  page = 1;
  pageSize = 10;

  destroyed$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) {
    this.route.queryParams
      .pipe(takeUntil(this.destroyed$))
      .subscribe(params => {
        this.findForm.patchValue(params);
        this.store.dispatch(new BuscarCampanhasAction(params));
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed$.next();
  }

  pesquisaToggle() {
    this.pesquisaOpened = !this.pesquisaOpened;
  }

  onSubmit() {
    if (this.findForm.valid) {
      const queryParams = Object.keys(this.findForm.value).reduce((qr, key) => {
        if (
          this.findForm.value[key] !== null &&
          this.findForm.value[key] !== undefined &&
          this.findForm.value[key] !== ''
        ) {
          return {
            ...qr,
            [key]: this.findForm.value[key]
          };
        }
        return qr;
      }, {});
      this.router.navigate([], { queryParams });
    }
  }

  viewDetails(campanha: Campanha) {
    this.router.navigate([this.campanha.id, 'details']);
  }
}
