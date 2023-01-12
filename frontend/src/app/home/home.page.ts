import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { MovieinfoPage } from '../movieinfo/movieinfo.page';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slides = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.5,
    spaceBetween: 15,
  };
  data: any;
  currentData: any;

  constructor(
    public modalController: ModalController,
    private http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/getAllMovies')
      .subscribe((val: any) => {
        console.log(val);
        this.data = val;
      });
  }

  async presentModal(data: any) {
    const modal = await this.modalController.create({
      component: MovieinfoPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.3,
      componentProps: { data: data },
    });
    return await modal.present();
  }

  setModelData(item: any) {
    console.log(item);
    this.currentData = item;
  }
}
