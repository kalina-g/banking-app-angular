import { ITransaction } from '../interfaces/ITransaction';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

export class TransactionService {
  transactions = [{
    "id": 1,
    "account_id": 1,
    "date": new Date('12.8.2019'),
    "time": "16:43",
    "account_title": "Сметка 1",
    "beneficiery": "Виваком ЕАД",
    "type": "Плащане по сметка",
    "purpouse": "плащане на сметка",
    "currency": "BGN",
    "total": 50.46,
    "flag": 2
  },

  {
    "id": 2,
    "account_id": 3,
    "date": new Date('4.8.2019'),
    "time": "02:48",
    "account_title": "Сметка 1",
    "beneficiery": "Иван Иванаов",
    "type": "Между мои сметки",
    "purpouse": "захранвам сметка",
    "currency": "BGN",
    "total": 20000.00,
    "flag": 2
  },
  {
    "id": 3,
    "account_id": 1,
    "date": new Date('5.12.2019'),
    "time": "16:43",
    "account_title": "Сметка 1",
    "beneficiery": "druga firma ЕАД",
    "type": "Междубанков превод",
    "purpouse": "плащане на сметка",
    "currency": "USD",
    "total": 23423435.46,
    "flag": 1

  },
  {
    "id": 4,
    "account_id": 2,
    "date": new Date('4.19.2019'),
    "time": "16:43",
    "account_title": "Сметка 1",
    "beneficiery": "Вивакое ЕАД",
    "type": "Междубанков превод",
    "purpouse": "превод захранване",
    "currency": "BGN",
    "total": 50.46,
    "flag": 0

  },
  {
    "id": 5,
    "account_id": 2,
    "date": new Date('4.19.2019'),
    "time": "16:43",
    "account_title": "Сметка 76",
    "beneficiery": "Вивsfsdfакое ЕАД",
    "type": "Плащане по сметка",
    "purpouse": "захранване",
    "currency": "BGN",
    "total": 2343556.46,
    "flag": 0

  },
  {
    "id": 6,
    "account_id": 2,
    "date": new Date('4.19.2019'),
    "time": "16:43",
    "account_title": "Сметка 1",
    "beneficiery": "Фирма ЕАД",
    "type": "Между мои сметки",
    "purpouse": "захранване",
    "currency": "BGN",
    "total": 500000.46,
    "flag": 0

  }]
  constructor() { }

  getByUserID(id: string): Observable<ITransaction[]> {
    return of(this.transactions);
  }

  getByAccountID(id: number): Observable<ITransaction[]> {
    return of(this.transactions).pipe(map(t => t.filter(
      k => k.account_id == id
    )));
  }

  sort(id, prop: string, direction: number): Observable<ITransaction[]> {
    return of(this.transactions).pipe(tap(t => t.filter(
      k => {
        if (id != null)
          k.account_id == id
      }
    )), map(
      t => t.sort((a, b) => {
        console.log(a[prop]);

        let propA = a[prop].toString().trim().toUpperCase();
        let propB = b[prop].toString().trim().toUpperCase();

        if (propA === propB) {
          return 0;
        } else if (propA > propB) {
          return direction * -1;
        } else {
          return direction * 1;
        }

      }
      )));
  }


}
