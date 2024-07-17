import './PasswordInput.sass';
import {useState} from "react";
import showPassword from '@icons/auth/show-password.svg';
import maskPassword from '@icons/auth/mask-password.svg';
import classNames from "classnames";
import {onClickAction} from "../../../utils/actions.js";

const PasswordInput = ({name, title, placeholder}) => {
    const [inputType, setInputType] = useState('password');
    const [isFocused, setIsFocused] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        const nextType = inputType === 'text' ? 'password' : 'text';
        setInputType(nextType);
    }

    return (
        <label className="password-input__label" htmlFor={name}>
            <div className="password-input__title small">{title}</div>
            <div className="password-input__input-block">
                <input type={inputType} className="password-input"
                       name={name}
                       placeholder={placeholder} id={name}
                       onFocus={() => setIsFocused(true)}
                       onBlur={() => setIsFocused(false)}
                />
                <div className={classNames("password-input__setting",
                    {"password-input__setting_focus": isFocused})}
                    {...{[onClickAction()]: onClick}}
                >
                    <img src={inputType === 'text' ? maskPassword : showPassword} alt="password" />
                </div>
            </div>
        </label>
    );
}

export default PasswordInput;