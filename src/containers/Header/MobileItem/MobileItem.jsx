import './MobileItem.sass';
import classNames from "classnames";
import arrow from "@icons/menu/menu-arrow.svg";
import {NavLink} from "react-router-dom";

const MobileItem = ({img, title, link, noArrow}) => {
    return (
        <NavLink to={link} className={({isActive}) => classNames("menu__item",
            "mobile-item",
            {'menu__item-active': isActive})} >
            <div className="menu__item-content">
                <div className="mobile-item__item-img-block">
                    <img src={img} alt={title} className="mobile-item__img" />
                    {link === '/messages' && <div className="menu__new-mes mobile-item__mes"></div>}
                </div>
                <div className="menu__item-title">{title}</div>
            </div>
            <img className={classNames("menu__item-arrow mobile-item__arrow", {'none': noArrow})}
                 src={arrow} alt="arrow"
            />
        </NavLink>
    );
}

export default MobileItem;