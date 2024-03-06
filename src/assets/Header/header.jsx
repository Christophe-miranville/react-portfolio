import './header.css'

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='nav'>Projets</div>
                <div className='nav'>Technos</div>
                <div className='nav'>CV
                    {/* disponible en téléchargement */}
                    <img className='ddl' src="\download.png" alt="logo_download" /></div>
            </nav>
        </>
    )
};

export default Header;