import { Component } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  eventObj: any = {
    
      "EventId": 0,
      "EventName": "",
      "Description": "",
      "Location": "",
      "StartDate": "",
      "StartTime": "",
      "EndDate": "",
      "EndTime": "",
      "ImageUrl": "",
      "Capacity": "",
      "Price": 0,
      "OrganizerId": 0,
      "IsIdentityMandatory": true,
      "IsCoupleEntryMandatory": true
    
  };
  loggedUserData: any;
  constructor(){
    const localData = localStorage.getItem('eventUser');
    if(localData != null){
  
      this.loggedUserData = JSON.parse(localData);
      this.eventObj.OrganizerId = this.loggedUserData.UserId;
    }
  }

}
