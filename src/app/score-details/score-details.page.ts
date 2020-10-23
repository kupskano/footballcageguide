import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.page.html',
  styleUrls: ['./score-details.page.scss'],
})
export class ScoreDetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;
  dateMessage: string;

  constructor(
    private actRoute: ActivatedRoute
  ) {

    setInterval(() => {         
      let currentDate=new Date();
      this.dateMessage = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
      // console.log(this.dateMessage)
    }, 1000);
   }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.description = this.actRoute.snapshot.paramMap.get('description');
  }

}
