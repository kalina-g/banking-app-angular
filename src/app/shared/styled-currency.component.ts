import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-styled-currency',
  templateUrl: './styled-currency.component.html',
  styleUrls: ['./styled-currency.component.scss']
})
export class StyledCurrencyComponent implements OnChanges, OnInit {

  @Input() currency;
  @Input() value;
  styledAmmount: string;
  decimal: string;
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges() {

    this.styledAmmount = this.currencyFormat(this.value);

    this.decimal = this.getDecimal(this.value);

  }

  currencyFormat(num) {
    var a = num;
    a.toString();
    return parseFloat(a)
      .toFixed(0)
      .replace(".", " ")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + ','
  }

  getDecimal(num: number) {
    let a = num.toFixed(2).toString();
    let radixAt = a.indexOf(".");
    let decimal = a.slice(radixAt + 1);

    return decimal;
  }

}
