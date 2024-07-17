import './Header.sass';
import logo from '../../assets/icons/logo.svg';
import login from '../../assets/icons/nav/login.svg';
import register from '../../assets/icons/nav/register.svg';
import menuImg from '@icons/menu/menu-img.svg';

import NavList from "../../containers/Header/NavList/NavList.jsx";
import {Link, NavLink, useLocation} from 'react-router-dom';
import AvatarProfile from "@containers/Content/AvatarProfile/AvatarProfile.jsx";
import Menu from "@containers/Main/Menu/Menu.jsx";
import MobileMenu from "@containers/Header/MobileMenu/MobileMenu.jsx";
import MobileBtn from "@containers/Header/MobileBtn/MobileBtn.jsx";


const Header = () => {
    const locInfo = useLocation();
    const pathName= locInfo.pathname;
    const devPages = ['/my-page', '/messages', '/my-page/friends', '/create-article', '/ask', '/buy-rating'];

    return (
        <div className="header">
            <div className="container">
                <div className='header__block wrapper'>
                    <div className="header__logo-nav">
                        <NavLink to="/" className="header__logo-block">
                            <img src={logo} alt='Логотип' />
                            <div className='header__title bold'>Coder Helper</div>
                        </NavLink>
                        <div className="header__nav-wrapper">
                            <NavList />
                        </div>
                    </div>
                    {!devPages.includes(pathName) ?
                        <div className="header__login-block">
                            <Link to="/login"><img src={login} alt="Логін"/></Link>
                            <Link to="/register"><img src={register} alt="Реєстрація"/></Link>
                        </div>
                    :
                        <AvatarProfile />
                    }
                    <div className="header__mobile-menu">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;