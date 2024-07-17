import './Checkbox.sass';
import {Link} from "react-router-dom";

const Checkbox = ({title, name, type}) => {

    return (
        <div className="form-checkbox">
            <input className="form-checkbox__checkbox" type="checkbox" name={name} id={name}/>
            <label htmlFor={name} className="form-checkbox__label">
                <span></span>
                <div className="form-checkbox__title">
                    {title}
                    {type === 'register' &&
                        <Link to="/" className="register__user-conditions-link text-link">
                            Умовами використання
                        </Link>
                    }
                </div>
            </label>
        </div>
    );
}

export default Checkbox;