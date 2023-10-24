import './Currencies.scss';

type Kebabs = {
  country: string;
  code: string;
  price: number;
};

type kebabsProps = {
  kebabs: Kebabs[];
};

function Currencies({ kebabs }: kebabsProps) {
  return (
    <ul className="currencies">
      <li className="currencies__title">Countries</li>
      {kebabs.map((kebab) => (
        <li className="currencies__item">{kebab.country}</li>
      ))}
    </ul>
  );
}

export default Currencies;
