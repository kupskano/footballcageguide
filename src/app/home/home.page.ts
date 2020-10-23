import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // myDate: String = new Date().toISOString();
  type: string;
  myDate: Date;
  dateMessage: string;
  constructor(
    private router: Router
  ) {
    setInterval(() => {         
      let currentDate=new Date();
      this.dateMessage = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
      // console.log(this.dateMessage)
    }, 1000);
  }

  ngOnInit() {
    this.type = 'basic';

    
    
  }

  segmentChanged(ev: any) {
    console.log('segment changed', ev);
  }


  guidefootballs = [
    {
      "id": 1,
      "title": "THE FIELD",
      "description": "The field measures 100 yards long and 53 yards wide. Little white markings on the field called yard markers help the players, officials, and the fans keep track of the ball.",
      "full_description": "The field measures 100 yards long and 53 yards wide. Little white markings on the field called yard markers help the players, officials, and the fans keep track of the ball. Probably the most important part of the field is the end zone. It's an additional 10 yards on each end of the field. This is where the points add up! When the offense - the team with  possession of the ball-gets the ball into the opponent's end zone, they score points."
    },
    {
      "id": 2,
      "title": "TIMING",
      "description": "Games are divided into four 15-minute quarters, separated by a 12-minute break at halftime. There are also 2-minute breaks at the end of the first and third quarters as teams change ends of the field after every 15 minutes of play.",
      "full_description": "Each offensive team has 40 seconds from the end of a given play until they must snap of the ball for the start of the next play, otherwise they will be penalized. The clock stops at the end of incomplete passing plays, when a player goes out of bounds, or when a penalty is called. The clock starts again when the ball is re-spotted by an official. If a game is tied at the end of regulation, a 15-minute overtime period will be played. In the NFL, this is sudden death and the first team to score wins. Possession is determined before the period begins by a coin toss."
    },
    {
      "id": 3,
      "title": "THE PLAYERS",
      "description": "Each team has 3 separate units: the offense those players who are on the field when the team has possession of the ball; the defense, players who line up to stop the other team's offense.",
      "full_description": "Each team has 3 separate units: the offense (see section below), those players who are on the field when the team has possession of the ball; the defense (see section below), players who line up to stop the other team's offense; and special teams that only come in on kicking situations (punts, field goals, and kickoffs). Only 11 players are on the field from one team at any one time."
    },
    {
      "id": 4,
      "title": "THE KICKOFF",
      "description": "A game starts with the kickoff. The ball is placed on a kicking tee at the defense's 30-yard line, and a special kicker kicks the ball to the offense A kick return man from the offense will try to catch the ball and advance it by running.",
      "full_description": "A game starts with the kickoff. The ball is placed on a kicking tee at the defense's 30-yard line, and a special kicker  kicks the ball to the offense A kick return man from the offense will try to catch the ball and advance it by running. Where he is stopped is the point from which the offense will begin its drive, or series of offensive plays. When akickoff is caught in the offense's own end zone, the kick returner can either run the ball out of the end zone, or kneel in theend zone to signal a touchback - a sign to stop the play. The ball is then placed on the 20-yard line, where the offensebegins play"
    },
    {
      "id": 5,
      "title": "FIRST DOWN",
      "description": "All progress in a football game is measured in yards. The offensive team tries to get as much as it can to tryand move closer to the opponent's end zone.",
      "full_description": "All progress in a football game is measured in yards. The offensive team tries to get as much as it can to try and move closer to the opponent's end zone. Each time the offense gets the ball, it has four downs, or chances, in which to gain 10 yards. If the offensive team successfully moves the ball 10 or more yards, it earns a first down, and another set of four downs. If the offense fails to gain 10 yards, it loses possession of the ball. "
    }
  ]


  guidefootballAdvances = [
    {
      "id": 1,
      "title": "MOVING THE BALL",
      "description": "The Run and the Pass A play begins with the snap. ",
      "full_description": "The Run and the Pass A play begins with the snap. At the line of scrimmage (the position on the field where the play begins), the quarterback loudly calls out a play in code and the player in front of him, the center, passes, or snaps the ball under his legs to the  quarterback. From there, the quarterback can either throw the ball, hand it off, or run with it."
    },
    {
      "id": 2,
      "title": "THE RUN",
      "description": "There are two main ways for the offense to advance the ball. The first is called a run",
      "full_description": "There are two main ways for the offense to advance the ball. The first is called a run. This occurs when the quarterback hands the ball off to a running back, who then tries to gain as many yards as possible by eluding defensive players. The quarterback is also allowed to run with the ball."
    },
    {
      "id": 3,
      "title": "THE PASS",
      "description": "The other alternative to running the ball is to throw it. ",
      "full_description": "The other alternative to running the ball is to throw it. Or as they say in football, pass it! Usually, the quarterback does the passing, though there are times when another player may pass the ball to confuse the defense. Actually, anyone on the offensive team is allowed to pass the ball as long as the pass is thrown from behind the line of scrimmage. A pass is complete if the ball is caught by another offensive player, usually the wide receiver or tight end. If the ball hits the ground before someone catches it, it is called an incomplete pass. "
    },
    {
      "id": 4,
      "title": "THE TACKLE",
      "description": "The defense prevents the offense from advancing the ball.",
      "full_description": "The defense prevents the offense from advancing the ball by bringing the ball carrier to the ground. A player is tackled when one or both of his knees touch the ground. The play is then over. A play also ends when a player runs out of bounds."
    },
    {
      "id": 5,
      "title": "TURNOVER",
      "description": "While trying to advance the football to the end zone",
      "full_description": "While trying to advance the football to the end zone, the offense may accidentally turn the ball over to the defense in one of two ways"
    },
    {
      "id": 6,
      "title": "THE FUMBLE",
      "description": "An aggressive defense can regain possession. ",
      "full_description": "An aggressive defense can regain possession of the ball by catching (intercepting) passes meant for players on the other team. Both fumble recoveries and interceptions can be run back into the end zone for touchdowns"
    }
   

  ]






  basicDetails(guidefootball) {
    this.router.navigate(['/basic-details', {
        'id': guidefootball.id,
        'title': guidefootball.title,
        'description': guidefootball.description,
        'full_description': guidefootball.description
    }
  ])
    console.log(guidefootball)
  }


  advanceDetails(guidefootballAdvance) {
      this.router.navigate(['/advance-details', {
        'id': guidefootballAdvance.id,
        'title': guidefootballAdvance.title,
        'description': guidefootballAdvance.description,
        'full_description': guidefootballAdvance.full_description
    }
  ])

 

    console.log(guidefootballAdvance);
  }

  
}
