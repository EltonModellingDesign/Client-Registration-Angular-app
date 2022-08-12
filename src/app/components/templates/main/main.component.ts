import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ ToggleService ]
})
export class MainComponent implements OnInit {

  boolean = true
  

  constructor(public myservice: ToggleService) {
  }


  ngOnInit(): void {
    this.myservice.choice.subscribe( choice => {
      this.boolean = choice;
    })

  }

}

