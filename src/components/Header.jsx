import Logo from './Logo.jsx';
import Navbar from './Navbar.jsx';
import style from './Header.module.css'

function Header() {
    return <header className={`d-flex ${style.header}`}> 
        <Logo/>
        <Navbar/>
    </header> 
}

export default Header;