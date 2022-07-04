import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <h1 className={headerStyles.title}>
                <span className={headerStyles.bold}>WebDev</span> Newz
            </h1>
            <p>Keep upto date with latest web dev news</p>
        </div>
    )
}

export default Header