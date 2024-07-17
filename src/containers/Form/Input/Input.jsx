import './Input.sass';

const Input = ({title, name, placeholder}) => {
    return (
        <label className="input__label" htmlFor={name}>
            <div className="input__title small">{title}</div>
            <input className="input" name={name} placeholder={placeholder} id={name} />
        </label>
    );
}

export default Input;