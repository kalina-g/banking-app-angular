import { Component, OnInit, Input } from '@angular/core';
import { IAccount } from '../interfaces/IAccount';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  account: IAccount | null;

  @Input() pageView;


  constructor(private accService: AccountService) { }

  ngOnInit() {
    this.accService.currentAccountUpdates$.subscribe(
      a => {
        this.account = a;
      }
    );
  }

}
