import './header.css'

const Header =()=>{


    return(
        <header className="nav-content">
            <div className='header-content'>
                <ul>
                    <li>
                        <a href="forms">Login - Forms</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/hooks">React Hookok</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;