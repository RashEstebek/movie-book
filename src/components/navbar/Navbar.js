import './style.css'
import nav_img from './../../img/icons/cinema-logo.jpg'
import nav_login_img from './../../img/icons/login.png'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <h2 className="nav-title">Movie<br/> <span>Book</span></h2>

                    <img src={nav_img} className="nav-logo"/>

                    <div className="nav-list">
                        <a href="#">Premieres</a>
                        <a href="#">Halls</a>
                        <a href="#">Contacts</a>
                        <a href="#"> <img src={nav_login_img} className="nav-login"></img> </a>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
