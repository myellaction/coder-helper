import './NavItem.sass';
import {NavLink} from 'react-router-dom';
import classNames from "classnames";

const NavItem = ({img, title, link, cl}) => {

    return (
        <NavLink to={link}
                 className={({isActive}) => classNames("header__nav-item", {'selected': isActive},
                     {[cl]: cl})}
        >
            <img src={img} alt={title} />
            <div className="header__item-title">{title}</div>
        </NavLink>
    );
}

export default NavItem;