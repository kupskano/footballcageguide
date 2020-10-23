import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercept',
  templateUrl: './intercept.page.html',
  styleUrls: ['./intercept.page.scss'],
})
export class InterceptPage implements OnInit {
  dateMessage: string;

  constructor() {
    setInterval(() => {         
      let currentDate=new Date();
      this.dateMessage = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
      // console.log(this.dateMessage)
    }, 1000);
   }

  ngOnInit() {
  }

}
