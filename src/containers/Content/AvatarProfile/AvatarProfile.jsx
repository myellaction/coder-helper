import './AvatarProfile.sass';

import profileArrow from "@icons/profile-arrow.svg";
import uaLang from '@icons/lang/ua.svg';
import enLang from '@icons/lang/en.svg';
import menuArrow from '@icons/menu/menu-arrow.svg';
import profileImg from '@icons/profile-menu/profile.svg';
import passImg from '@icons/profile-menu/change-pass.svg';
import logoutImg from '@icons/profile-menu/logout.svg';

import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import Rating from "@containers/Content/Rating/Rating.jsx";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from 'react';
import classNames from 'classnames';
import {clickAction, onClickAction} from "../../../utils/actions.js";

const AvatarProfile = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [lang, setLang] = useState('uk');

    const menuData = [
        {'img': profileImg, 'title': 'Профіль', 'link': '/profile'},
        {'img': passImg, 'title': 'Змінити пароль', 'link': '/change-password'},
        {'img': logoutImg, 'title': 'Вийти', 'link': '/logout'}
    ];

    const menuItems = menuData.map((item, index) => {
        return (
            <NavLink to={item.link} className="top-profile__menu-item" key={index}>
                <img className="top-profile__item-img" src={item.img} />
                <div className="top-profile__item-title">{item.title}</div>
            </NavLink>
        )
    });

    const closeBlock = () => {
        if(isOpened){
            setIsOpened(false);
        }
    }

    useEffect(() => {
        window.addEventListener(clickAction(), closeBlock);
        return () => window.removeEventListener(clickAction(), closeBlock);
    }, [isOpened]);

    return (
        <div className="top-profile">
            <div className="top-profile__header" {...{[onClickAction()]: () => setIsOpened(!isOpened)}}>
                <div className="top-profile__avatar">
                    <Avatar size="36" noOnline={true}/>
                </div>
                <img className={classNames("top-profile__profile-arrow",
                    {'top-profile__profile-arrow_rotate': isOpened})} src={profileArrow} alt="profile"/>
            </div>
            <div className={classNames("top-profile__block", {'top-profile__block_opened': isOpened})}
                 {...{[onClickAction()]: (e) => e.stopPropagation() }}
            >
                <div className="top-profile__name-rating">
                    <NavLink to="/my-page" className="top-profile__name semi-bold">Іван</NavLink>
                    <Rating rating="1000" />
                </div>
                <div className="top-profile__lang-block" {...{[onClickAction()]: () => setLang(lang => lang === 'uk' ? 'en' : 'uk')}}>
                    <div className={classNames("top-profile__lang", {"top-profile__lang_selected": lang === 'uk'})}>
                        <img className="top-profile__lang-img" src={uaLang} alt="Українська"/>
                        <div className="top-profile__lang-title">Мова</div>
                    </div>
                    <div className={classNames("top-profile__lang", {"top-profile__lang_selected": lang === 'en'})}>
                        <img className="top-profile__lang-img" src={enLang} alt="Українська"/>
                        <div className="top-profile__lang-title">Language</div>
                    </div>
                    <img className="top-profile__item-arrow" src={menuArrow} alt="arrow"/>
                </div>
                {menuItems}
            </div>
        </div>
    );
}

export default AvatarProfile;