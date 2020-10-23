import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.page.html',
  styleUrls: ['./scores.page.scss'],
})
export class ScoresPage implements OnInit {
  dateMessage: string;

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) {

    setInterval(() => {         
      let currentDate=new Date();
      this.dateMessage = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
      // console.log(this.dateMessage)
    }, 1000);

   }



  scoredetails = [
    {
      "id": 1,
      "title": "TOUCHDOWN = 6 POINTS",
      "description": "A touchdown is the biggest single score in a football game. It is worth six points, and it allows the scoring team an opportunity to attempt to get an extra point. To score a touchdown, the ball must be carried  across the goal line into the end zone, caught in the end zone, or a fumble recovered in the end zone, or  an untouched kickoff recovered in the end zone by the kicking team."
    },
    {
      "id": 2,
      "title": "EXTRA POINT 1 or 2 POINTS",
      "description": "Immediately following a touchdown, the ball is placed at the opponent's two-yard line, where the offense  has two options. Usually the offense will kick an extra point, also called the point after touchdown,  conversion, or PAT. If the offense successfully kicks the ball through the goal posts, it earns one point. The offense can also score two points by running or throwing the ball into the end zone in the same  manner as you would score a touchdown. Since going for two points is more difficult than kicking an extra  point, the offense generally chooses to kick the extra point."
    },
    {
      "id": 3,
      "title": "FIELD GOAL = 3 POINTS",
      "description": "If the offense cannot score a touchdown, it may try to kick a field goal. Field goals are worth three points  and often are the deciding plays in the last seconds of close games. They can be attempted from  anywhere on the field on any down, but generally are kicked from inside the defense's 45-yard line on  fourth down. For a field goal to be good, the placekicker (or field goal kicker) must kick the ball through  the goal-post uprights and over the crossbar. The defense tries to block the kick and stop the ball from  reaching the goal post"
    },
    {
      "id": 4,
      "title": "SAFETY = 2 POINTS",
      "description": "The safety is worth two points. A safety occurs when the offensive ball carrier is tackled behind his own goal line."
    }

  ]


  async scoresDetails(scoredetail) {
      const loading = await this.loadingController.create({
        duration: 3000,
        message: 'Please wait...'
      })
      await loading.present();
      this.router.navigate(['score-details', {
          'id': scoredetail.id,
          'title': scoredetail.title,
          'description': scoredetail.description
      }
    ])
    console.log(scoredetail);
  }



  ngOnInit() {
  }

}
