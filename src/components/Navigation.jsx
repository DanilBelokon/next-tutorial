import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link href="/" className="nav-link">
        Главная
      </Link>
      <Link href="/about" className="nav-link">
        Фото
      </Link>
      <Link href="/contacts" className="nav-link">
        Контакты
      </Link>
      <Link href="/users" className="nav-link">
        Users
      </Link>
      <Link href="/getExample" className="nav-link">
        Get
      </Link>
      <Link href="/postExample" className="nav-link">
        Post
      </Link>
    </nav>
  );
};

export default Navigation;
