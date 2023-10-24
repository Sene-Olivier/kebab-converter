import './Currencies.scss';

type Currencies = {
  description: string;
  code: string;
  rate: number;
};

type CurrenciesProps = {
  currencies: Currencies[];
};

function Currencies({ currencies }: CurrenciesProps) {
  return (
    <ul className="currencies">
      <li className="currencies__title">Currencies</li>
      {currencies.map((currency) => (
        <li className="currencies__item">{currency.description}</li>
      ))}
    </ul>
  );
}

export default Currencies;
