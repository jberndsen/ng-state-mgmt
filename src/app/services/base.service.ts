import {Store} from '@ngrx/store';

export abstract class BaseService {
  state: any;

  constructor(protected store: Store<any>) {
    this.store.subscribe(s => this.state = s);
  }
}
