import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountGridComponent } from './account-grid/account-grid.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { AccountService } from './services/account.service';
import { TransactionService } from './services/transaction.service';
import { TransactionComponent } from './transaction/transaction.component';
import { StyledCurrencyComponent } from '../shared/styled-currency.component';



@NgModule({
  declarations: [StyledCurrencyComponent, AccountsComponent, AccountDetailComponent, AccountGridComponent, AccountCardComponent, PageHeadingComponent, TransactionComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
  ,providers:[AccountService, TransactionService]
})
export class AccountModule { }
