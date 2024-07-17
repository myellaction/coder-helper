import './MenuItem.sass';
import arrow from '../../../assets/icons/menu/menu-arrow.svg';

import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

const MenuItem = ({img, title, link}) => {
    return (
        <NavLink to={link} className={({isActive}) => classNames("menu__item",
            {'menu__item-active': isActive})} >
            <div className="menu__item-content">
                <div className="menu__item-img-block">
                    <img src={img} alt={title} />
                    {link === '/messages' && <div className="menu__new-mes"></div>}
                </div>
                <div className="menu__item-title">{title}</div>
            </div>
            <img className="menu__item-arrow" src={arrow} alt="arrow" />
        </NavLink>
    );
}

export default MenuItem;