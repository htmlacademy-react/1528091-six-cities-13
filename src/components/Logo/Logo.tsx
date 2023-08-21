import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className="logo-link" to="/">
      <img
        className="logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={64}
        height={33}
      />
    </Link>
  );
}

export default Logo;
