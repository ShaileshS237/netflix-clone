import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.page.html',
  styleUrls: ['./movieinfo.page.scss'],
})
export class MovieinfoPage implements OnInit {
  data: any;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private router: Router
  ) {
    this.data = this.navParams.get('data');
  }

  ngOnInit() {}

  redirectToVideo(item: any) {
    this.modalCtrl.dismiss();
    let navigateExtra: NavigationExtras = {
      queryParams: {
        id: item.id,
        imageLink: item.imageLink,
        name: item.name,
        trailerLink: item.trailerLink,
        watchtime: item.watchtime,
        year: item.year,
        discrption: item.discrption,
      },
    };
    this.router.navigate(['movie'], navigateExtra);
  }
}
