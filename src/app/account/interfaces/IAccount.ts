export interface IAccount {
    id: number;
    title:string;
    number_of_cards: number;
    ballance: number;
    currency: string;
    account_number: string;
    account_type: string;
    account_owner: string;
    date_created: string;
    cards:Array<any>;
}

