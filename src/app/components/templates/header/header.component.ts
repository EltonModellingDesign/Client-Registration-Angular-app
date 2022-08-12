import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ToggleService]
})
export class HeaderComponent implements OnInit {

  constructor(public myservice: ToggleService) {   
  }
  
  togglex () {
    this.myservice.toggle()
  }

  ngOnInit(): void {
    this.myservice.active.subscribe()
  }
  
  

}
