import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @HostBinding('class.is-open') @Input()
  isOpen = false;
  
  constructor() { }

  ngOnInit() {
  }

}
