import { Component, OnInit } from '@angular/core';

import { CardIO } from '@ionic-native/card-io/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor( private cardIO: CardIO ) {}

  ngOnInit(): void {
    this.cardIO.canScan().then((res: boolean) => {
        if(res){
          let options = {
            requireExpiry: true,
            requireCVV: true,
            requirePostalCode: false,
            useCardIOLogo: true,
            requireCardholderName: true
          };
          this.cardIO.scan(options);
        }
      }
    );
  }

  

}
