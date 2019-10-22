import { Observable } from 'rxjs/internal/Observable';
import { of, from, BehaviorSubject, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { IAccount } from '../interfaces/IAccount';
import { AccountModule } from '../account.module';

export class AccountService {

  pageView:true;
  private pagePreviewSource = new BehaviorSubject<boolean>(true);
  pagePreviewToggle$ = this.pagePreviewSource.asObservable();

  currentAccount:IAccount | null;
  private currentAccountSource = new BehaviorSubject<IAccount>(null);
  currentAccountUpdates$ = this.currentAccountSource.asObservable();
  accounts: IAccount[] = [
    {
      "id": 1,
      "title": "Разплащателна сметка с 1 карта",
      "number_of_cards": 1,
      "ballance": 124000.85,
      "currency": "BGN",
      "account_number": "BG9837847345773458",
      "account_type": "Разплащателна",
      "account_owner": "Иван Петров",
      "date_created": "04/08/09",
      "cards": [
        { "name": "Visa ...", "number": "123" },
        { "name": "MasterCard ...", "number": "123" }
      ]
    },
    {
      "id": 2,
      "title": "Разплащателна сметка с 2 карта",
      "number_of_cards": 2,
      "ballance": 4785.00,
      "currency": "BGN",
      "account_number": "BG12312373458",
      "account_type": "Разплащателна",
      "account_owner": "Иван Петров",
      "date_created": "04/08/09",
      "cards": [
        { "name": "Visa ...", "number": "123" },
        { "name": "MasterCard ...", "number": "123" }
      ]
    },
    {
      "id": 3,
      "title": "Спестовна сметка карта",
      "number_of_cards": 2,
      "ballance": 80000.87,
      "currency": "BGN",
      "account_number": "BG12312373458",
      "account_type": "Спестовна",
      "account_owner": "Иван Петров",
      "date_created": "04/08/09",
      "cards": []
    }
  ];


  constructor() { }

  updateCurrentAccount(acc:IAccount) {
    this.currentAccountSource.next(acc);
  }

  togglePageView(v:boolean) {
    this.pagePreviewSource.next(v);
  }


  getAccounts(): Observable<IAccount[]> {
    return of(this.accounts);
  }

  getAccountById(id: number): Observable<IAccount[]> {
    return of(this.accounts).pipe(filter(
      (k, i) =>{

        return k[i].id == id}
    ));
  }


}
