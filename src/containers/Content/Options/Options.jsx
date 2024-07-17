import './Options.sass';
import dotsImg from "@icons/my-page/dots.svg";
import classNames from "classnames";
import {useEffect, useState} from "react";
import {clickAction, onClickAction} from "../../../utils/actions.js";

const Options = () => {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    const closeBlock = (e) => {
        const target = e.target;
        if(![target, target.parentNode].some(item => item.classList.contains('options__menu'))){
            setIsOpenedMenu(false);
        }
    }

    useEffect(() => {
        window.addEventListener(clickAction(), closeBlock);
        return () => window.removeEventListener(clickAction(), closeBlock);
    }, []);


    return (
        <div className="options">
            <div className="options__menu" {...{[onClickAction()]: () => setIsOpenedMenu(!isOpenedMenu)}}>
                <img src={dotsImg} alt="menu"/>
            </div>
            <div className={classNames("options__options-block",
                {"options__options-block_opened": isOpenedMenu})}
                {...{[onClickAction()]: e => e.stopPropagation()}}
            >
                <div className="options__option small">Видалити чат</div>
            </div>
        </div>
    );
}

export default Options;