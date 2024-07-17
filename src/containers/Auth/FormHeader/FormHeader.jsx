import './FormHeader.sass';

const FormHeader = ({title, description, img}) => {
    return (
        <div className="form-header">
            <div className="form-header__title-desc">
                <div className="form-header__title menu-title">{title}</div>
                <div className="form-header__desc">{description}</div>
            </div>
            <img src={img} alt="auth-img" />
        </div>
    );
}

export default FormHeader;