// Receives the blog name from App and displays it as the main heading.
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;