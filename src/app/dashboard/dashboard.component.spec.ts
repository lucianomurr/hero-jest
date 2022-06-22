import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HEROES } from '../mock/mock-heroes';
import { DateTimeService } from '../shared/service/date-time.service';
import { HeroService } from '../shared/service/hero.service';

import { DashboardComponent } from './dashboard.component';

class MockHeroService {
  getHeroes = jest.fn();
}
class DateTimeServiceMock {
  getDayMoment = jest.fn();
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService: MockHeroService = new MockHeroService();
  let dateTimeService: DateTimeService = new DateTimeServiceMock();

  let getHeroesSpy = jest.spyOn(heroService, 'getHeroes').mockReturnValue(of(HEROES));
  let dateTimeSpy = jest.spyOn(dateTimeService, 'getDayMoment').mockReturnValue('Afternoon');


  beforeEach(waitForAsync(() => {

    TestBed
        .configureTestingModule({
          declarations: [DashboardComponent, HeroSearchComponent],
          imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
          providers: [{
            provide: HeroService,
            useValue: heroService
          }, {
            provide: DateTimeService,
            useValue: dateTimeService
          } ]
        })
        .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2')
      .textContent).toEqual('Good Afternoon - Top Heroes');
  });

  it('should call heroService', waitForAsync(() => {
    expect(getHeroesSpy).toHaveBeenCalled();
  }));

  it('should call dateTimeService', waitForAsync(() => {
    expect(dateTimeSpy).toHaveBeenCalled();
  }));

  it('should display 4 links', waitForAsync(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));
});
