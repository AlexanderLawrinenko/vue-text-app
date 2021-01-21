export type ExchangeOptions = {
  amount: string;
  from: string;
  to: string;
}

export type HistoryOption = {
  amount: string;
  from: string;
  to: string;
  result: number;
  date?: string;
}

export type Rate = {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}
