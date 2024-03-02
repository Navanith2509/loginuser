// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => {
  const onLogout = () => {
    console.log('logout')
  }

  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
export default Header
