import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { IAccount } from '../interfaces/IAccount'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  pageView = true;
  isSelectedAccount: boolean;
  accounts: IAccount[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts()
      .subscribe((a: IAccount[]) => this.accounts = a);
    console.log(this.pageView);
  }

  onChangedView(v) {
    this.pageView = v;
  }

  onSelect(isSelected) {
    this.isSelectedAccount = isSelected;
  }


}
