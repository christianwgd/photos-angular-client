import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../services/event.service";
import {Event} from "../../event";
import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-event-get',
  templateUrl: './event-get.component.html',
  styleUrls: ['./event-get.component.css']
})
export class EventGetComponent implements OnInit {

  @Input() eventUrl: string;

  event: Event;
  private route: ActivatedRoute;
  private eventService: EventService;

  constructor( eventService: EventService, route: ActivatedRoute) {
    this.route = route;
    this.eventService = eventService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventService.getEvent(this.eventUrl).subscribe( event => {
        this.event = event;
      })
    })

  }

}
