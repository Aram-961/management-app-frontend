import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className='mb-4 p-0 bg-blend-lighten'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          <div className='flex'>
            <img src={logo} alt='' />
            <h1>Project Management</h1>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
