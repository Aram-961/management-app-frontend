import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className='navbar-brand flex'>
      <div className="flex">
        <img src={logo} alt='' />
        <h1>Project Management</h1>
      </div>
    </nav>
  );
};

export default Header;
