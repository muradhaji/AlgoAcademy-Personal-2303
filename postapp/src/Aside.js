import './Aside.css';

function Aside(props) {
  let { isOpen } = props;

  return (
    <aside className={isOpen ? '' : 'hidden'}>
      <nav>
        <a href='/'>Home</a>
        <a href='/posts'>Posts</a>
        <a href='/users'>Users</a>
      </nav>
    </aside>
  );
}

export default Aside;
