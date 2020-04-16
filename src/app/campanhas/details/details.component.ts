import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, combineLatest, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, filter } from 'rxjs/operators';
import { SelecionarCampanhaAction } from '../campanhas.actions';
import { selectCampanhasSelecionada } from '../campanhas.state';

@Component({
  selector: 'cia-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  one;
  two;
  idSubscription: Subscription;

  private id$: Observable<string> = this.route.params.pipe(
    map(({ id }) => id),
    distinctUntilChanged()
  );
  campanha$ = this.store.select(selectCampanhasSelecionada);

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idSubscription = this.id$
      .pipe(filter(id => id !== 'new'))
      .subscribe(id => this.store.dispatch(new SelecionarCampanhaAction(id)));
  }

  ngOnInit() {}
}
