import logo from "../images/reactlogo.png";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <nav className="nav">
          <div className="left-nav">
            <img src={logo} alt="react logo" className="img-logo" />
            <h2>React Facts</h2>
          </div>
          <h4>React Course - Project 1</h4>
        </nav>
      </header>
    </>
  );
};

export default Header;
