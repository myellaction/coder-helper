import './SelectAvatar.sass';
import classNames from "classnames";
import {onClickAction} from "../../../utils/actions.js";

const SelectAvatar = ({avatarImg, selected, onClick}) => {
    return (
        <div className="select-avatar" {...{[onClickAction()]: onClick}}>
            <img className="select-avatar__img" src={avatarImg} alt="avatar" />
            <div className={classNames("select-avatar__chosen",
                {"select-avatar__chosen_open": selected})}
            >
                <svg className="select-avatar__ok-img" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.86364L4.57143 9.5L12.4286 1.5" stroke="white" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}

export default SelectAvatar;