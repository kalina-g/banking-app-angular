import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { AccountService } from '../services/account.service';
import { IAccount } from '../interfaces/IAccount';
import { ITransaction } from '../interfaces/ITransaction';
import { Observable } from 'rxjs';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  pageView: boolean;
  transactions: ITransaction[];
  currentAccount: IAccount | null;
  direction = 1;
  propName: string = null;

  constructor(private transactionService: TransactionService,
    private accService: AccountService) { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.accService.currentAccountUpdates$.subscribe(
      a => {
        this.currentAccount = a;
        if (a) {
          this.getTransactions();
        } else {
          this.getAllTransactions();
        }
      }
    );

    this.accService.pagePreviewToggle$.subscribe(
      a => {
        this.pageView = a;
      }
    );
  }
  getTransactions() {
    this.transactionService.getByAccountID(this.currentAccount.id).subscribe(t => this.transactions = t);
  }

  getAllTransactions() {
    this.transactionService.getByUserID('1').subscribe(t => this.transactions = t);
  }

}


