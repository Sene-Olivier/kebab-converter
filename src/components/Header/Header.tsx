import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src="src\assets\kebab.png"
        alt="Image de nourriture de type kebab"
      />
      <h1 className="header__title">Converter</h1>
      <p className="header__subtitle">1 kebab</p>
    </header>
  );
}

export default Header;
