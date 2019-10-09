import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="nav-bar">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/students">
        <a style={linkStyle}>Students</a>
    </Link>
    <Link href="/faculty">
        <a style={linkStyle}>Faculty</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;