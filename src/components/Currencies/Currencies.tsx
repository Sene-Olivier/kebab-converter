import './Currencies.scss';

type Kebab = {
  country: string;
  code: string;
  price: number;
};

type KebabsProps = {
  kebabs: Kebab[];
};

function Currencies({ kebabs }: KebabsProps) {
  return (
    <ul className="currencies">
      <li className="currencies__title">Pays</li>
      {kebabs.map((kebab) => (
        <li className="currencies__item">
          {kebab.country} : {kebab.price} {kebab.code}
        </li>
      ))}
    </ul>
  );
}

export default Currencies;
