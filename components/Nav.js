import Link from 'next/link'
import NavStyles from '../styles/Nav.module.css'
const Nav = () => {
    return (
        <nav className={NavStyles.nav}>
            <ul className={NavStyles.navItem}>
                <li className={NavStyles.link}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={NavStyles.link}>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav