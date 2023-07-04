import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-container'>
            <Link className='link' to="/">Logo</Link>
            <div className='link-list'>
            <Link className='link' to="/business">Business</Link>
            <Link className='link' to="/entertainment">Entertainment</Link>
            <Link className='link' to="/health">Health</Link>
            <Link className='link' to="/science">Science</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar