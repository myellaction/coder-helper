import './MobileNavList.sass';
import home from "@icons/nav/home.svg";
import usersImg from "@icons/nav/users.svg";
import commonChat from "@icons/nav/common-chat-mobile.svg";
import infoImg from "@icons/nav/info.svg";
import {NavLink} from "react-router-dom";

const MobileNavList = () => {
    const items = [
        {img: home, title: 'Головна', link: '/'},
        {img: usersImg, title: 'Користувачі', link: '/users'},
        {img: commonChat, title: 'Загальний чат', link: '/common-chat'},
        {img: infoImg, title: 'Про проект', link: '/info'},
    ];

    const itemsHtml = items.map((item, index) => {
        return (
            <NavLink to={item.link} className="mobile-nav__item" key={index}>
                <div className="mobile-nav__item-wrapper">
                    <img src={item.img} alt={item.title} />
                    <div className="mobile-nav__item-title">{item.title}</div>
                </div>
            </NavLink>
        );
    });

    return (
        <div className="mobile-nav">
            {itemsHtml}
        </div>
    );
}

export default MobileNavList;