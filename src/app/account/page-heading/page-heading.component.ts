import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
})
export class PageHeadingComponent implements OnInit {
  @Input() options;
  @Output() viewChanged: EventEmitter<boolean> = new EventEmitter();

  state = true;

  constructor(private accService: AccountService) { }

  ngOnInit() {
  }

  onClick() {
    this.state = !this.state;
    this.viewChanged.emit(this.state);
    this.accService.togglePageView(this.state);
  }
}
