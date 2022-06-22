import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/intefaces/hero';
import { HeroService } from '../shared/service/hero.service';
import { DateTimeService } from '../shared/service/date-time.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  momentOfTheDay: string = '';

  constructor(private heroService: HeroService, private dateTimeService: DateTimeService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.momentOfTheDay = this.dateTimeService.getDayMoment(new Date());
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
