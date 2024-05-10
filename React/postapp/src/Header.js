import './Header.css';

function Header(props) {
  let { toggle } = props;
  return (
    <header>
      <div className='logo'>Post App</div>
      <div className='toggleMenu' onClick={toggle}>
        <i className='fa-solid fa-bars'></i>
      </div>
    </header>
  );
}

export default Header;
