import './NavList.sass';
import home from "../../../assets/icons/nav/home.svg";
import usersImg from "../../../assets/icons/nav/users.svg";
import commonChat from "../../../assets/icons/nav/common-chat.svg";
import infoImg from "../../../assets/icons/nav/info.svg";
import NavItem from "../NavItem/NavItem.jsx";

const NavList = () => {
    const itemsData = [
        {img: home, title: 'Головна', link: '/'},
        {img: usersImg, title: 'Користувачі', link: '/users'},
        {img: commonChat, title: 'Загальний чат', link: '/common-chat'},
        {img: infoImg, title: 'Про проект', link: '/info'},
    ];

    const items = itemsData.map((item, index) => {
        return (
            <NavItem {...item} key={index} />
        );
    });

    return (
        <div className="header__nav">
            {items}
        </div>
    );
}

export default NavList;