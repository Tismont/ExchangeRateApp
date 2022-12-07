export type ExchangeRates = {
  CZK: number;
  DKK: number;
  GBP: number;
  USD: number;
};

export type Currencies = {
  amount: number;
  base: string;
  date: string;
  rates: ExchangeRates;
};
