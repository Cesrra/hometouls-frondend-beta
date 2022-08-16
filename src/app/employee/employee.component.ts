import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../core/state/employee/employee.actions';

@Component({
  selector: 'employee-count',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {

  employee$: Observable<number>;

  constructor(private store: Store<{ employee: number }>) {
    this.employee$ = store.select('employee');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
