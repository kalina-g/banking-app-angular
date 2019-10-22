export interface ITransaction {
    id:number;
    account_id:number;
    date:Date | string;
    time:string;
    account_title:string;
    beneficiery:string;
    type:string;
    purpouse:string;
    currency:string;
    total:number;
    flag:number;
}

