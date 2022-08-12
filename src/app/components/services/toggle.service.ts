import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  choice = new BehaviorSubject<boolean>(true);
  active = this.choice.asObservable()
  
  
  toggle() {
    this.choice.next(!this.choice.value)
    console.log(this.choice)
  }
  

  constructor() {
  }

}
