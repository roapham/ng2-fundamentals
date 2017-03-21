import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    // templateUrl: 'app/events/events-list.component.html'
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <event-thumbnail [event]="event1" (eventClick)="handleEventClicked($event)"></event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2014',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assests/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
    handleEventClicked(data){
      console.log('received: ', data);
    }
}
