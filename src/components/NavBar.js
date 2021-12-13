import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='nav'>
            <Link to='/Home'>Home</Link>
            <Link to='/about'>About</Link>

        </header>
    )
}

export default NavBar;