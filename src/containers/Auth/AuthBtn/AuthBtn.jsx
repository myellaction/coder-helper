import './AuthBtn.sass';

const AuthBtn = ({title}) => {
    return (
        <button className="auth-btn menu-title" type="submit">{title}</button>
    );
}

export default AuthBtn;