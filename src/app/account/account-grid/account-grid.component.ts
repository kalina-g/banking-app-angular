import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAccount } from '../interfaces/IAccount';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-grid',
  templateUrl: './account-grid.component.html',
  styleUrls: ['./account-grid.component.scss']
})
export class AccountGridComponent implements OnInit {

  @Input() accounts: IAccount[];
  @Input() pageView;
  @Output() isSelected = new EventEmitter<any>();
  //make it respond on update
  get selectedAccount(): IAccount | null {
    return this.accService.currentAccount;
  }

  constructor(private accService: AccountService) {
  }

  onSelect(a) {
    this.isSelected.emit(true);
    this.accService.updateCurrentAccount(a);
    this.accService.currentAccount = a;
  }

  ngOnInit() {
  }

}
