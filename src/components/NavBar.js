import { Link } from 'react-router-dom'

const NavBar = () => { 
    return (
        <header className='nav'>
            <span id='youtube'>Youtube</span>

            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>

        </header>
    )
}

export default NavBar