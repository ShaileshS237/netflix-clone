import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  data: any;
  constructor(public route: ActivatedRoute) {
    this.route.queryParams.subscribe((val) => {
      console.log(val);
      this.data = val;
    });
  }

  ngOnInit() {}
}
