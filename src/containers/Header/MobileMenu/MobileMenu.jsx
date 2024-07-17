import './MobileMenu.sass';
import MobileBtn from "@containers/Header/MobileBtn/MobileBtn.jsx";
import {useEffect, useState} from "react";
import MobileNavList from "@containers/Header/MobileNavList/MobileNavList.jsx";
import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import Rating from "@containers/Content/Rating/Rating.jsx";
import {Link, useLocation} from "react-router-dom";
import {onClickAction, onTapClick} from "../../../utils/actions.js";
import classNames from "classnames";
import uaLang from "@icons/lang/ua.svg";
import enLang from "@icons/lang/en.svg";
import MobileItems from "@containers/Header/MobileItems/MobileItems.jsx";
import login from "@icons/nav/login.svg";
import register from "@icons/nav/register.svg";


const MobileMenu = () => {
    const location = useLocation();

    const [isOpened, setIsOpened] = useState(null);
    const [lang, setLang] = useState('uk');

    const isAuthenticated = false;

    useEffect(() => {
        setIsOpened(false);
    }, [location]);

    return (
        <div className="mobile-menu">
            <div className="mobile-menu__btn">
                <MobileBtn isOpened={isOpened} setIsOpened={setIsOpened}/>
            </div>
            <div className={classNames("container mobile-menu__block",
                {'mobile-menu__block_open': isOpened})}
            >
                <div className="mobile-menu__title menu-title">Меню</div>
                <div className="mobile-menu__nav-list">
                    <MobileNavList/>
                </div>
                <hr className="menu__line mobile-menu__line"/>
                {isAuthenticated ?
                    <Link to="/my-page" className="mobile-menu__user-info">
                        <div className="mobile-menu__avatar-name">
                            <div className="mobile-menu__avatar">
                                <Avatar noOnline={true}/>
                            </div>
                            <div className="mobile-menu__name semi-bold">Іван</div>
                        </div>
                        <Rating rating="1000"/>
                    </Link>
                :
                    <div className="mobile-menu__login-block">
                        <Link to="/login">
                            <img src={login} alt="Логін"/>
                            <div className="mobile-menu__login-block-title">Логін</div>
                        </Link>
                        <Link to="/register">
                            <img src={register} alt="Реєстрація"/>
                            <div className="mobile-menu__login-block-title">Реєстрація</div>
                        </Link>
                    </div>
                }
                <hr className="menu__line mobile-menu__line"/>
                <div className="top-profile__lang-block mobile-menu__lang-block"
                     {...{[onClickAction()]: () => setLang(lang => lang === 'uk' ? 'en' : 'uk')}}
                >
                    <div className={classNames("top-profile__lang", {"top-profile__lang_selected": lang === 'uk'})}>
                        <img className="mobile-menu__lang-img" src={uaLang} alt="Українська"/>
                        <div className="top-profile__lang-title">Мова</div>
                    </div>
                    <div className={classNames("top-profile__lang", {"top-profile__lang_selected": lang === 'en'})}>
                        <img className="mobile-menu__lang-img" src={enLang} alt="Українська"/>
                        <div className="top-profile__lang-title">Language</div>
                    </div>
                </div>
                <hr className="menu__line mobile-menu__line"/>
                <MobileItems/>
                <div className="mobile-menu__docs">
                    <a href="#" className="mobile-menu__doc text-link small">Політика конфіденційності</a>
                    <a href="#" className="mobile-menu__doc text-link small">Умови використання</a>
                    <a href="#" className="mobile-menu__doc text-link small">Використані технології</a>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;






