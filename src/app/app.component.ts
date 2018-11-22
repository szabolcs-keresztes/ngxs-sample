import { Component } from '@angular/core';
import { Store, State, StateContext } from '@ngxs/store';

enum FaultType {
  driving,
  serious,
  dangerous
};

class PickFaultType {
  static readonly type = 'PickFaultType';
  constructor(public faultType: FaultType) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  constructor(private store: Store) {}

  pickFaultType(faultType: FaultType) {
    this.store.dispatch(new PickFaultType(faultType)).subscribe(() => console.log('PickFaultType action dispatched'));
  }




}
