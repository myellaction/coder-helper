import './FormBottom.sass';
import SocialAuth from "@containers/Auth/SocialAuth/SocialAuth.jsx";
import {Link} from "react-router-dom";

const FormBottom = ({alternativeTitle,
                    registerText, registerLinkText, link}) => {
    return (
        <div className="form-bottom">
            <div className="form-bottom__or-login">{alternativeTitle}</div>
            <div className="form-bottom__social-auth">
                <SocialAuth/>
            </div>
            <div className="form-bottom__register small">
                <div className="form-bottom__register-text">{registerText}</div>
                <Link to={link} className="form-bottom__register-link text-link">
                    {registerLinkText}
                </Link>
            </div>
        </div>
    );
}

export default FormBottom;