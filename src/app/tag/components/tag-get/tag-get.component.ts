import {ActivatedRoute} from "@angular/router";
import {TagService} from "../../services/tag.service";
import {Tag} from "../../tag";
import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-tag-get',
  templateUrl: './tag-get.component.html',
  styleUrls: ['./tag-get.component.css']
})
export class TagGetComponent implements OnInit {

  @Input() tagUrl: string;

  tag: Tag;
  private route: ActivatedRoute;
  private tagService: TagService;

  constructor(tagService: TagService, route: ActivatedRoute) {
    this.route = route;
    this.tagService = tagService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tagService.getTag(this.tagUrl).subscribe( tag => {
        this.tag = tag;
      })
    })

  }

}
