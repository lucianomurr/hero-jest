import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  getDayMoment(dateTime: Date){

    if (dateTime.getHours() >= 0 && dateTime.getHours() < 6)
    {
        return "Night";
    }
    if (dateTime.getHours() >= 6 && dateTime.getHours() < 12)
    {
        return "Morning";
    }
    if (dateTime.getHours() >= 12 && dateTime.getHours() < 18)
    {
        return "Afternoon";
    }
    return "Evening";

  }

}
