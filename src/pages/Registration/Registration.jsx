import './Registration.sass';
import Block from "@containers/Content/Block/Block.jsx";
import FormHeader from "@containers/Auth/FormHeader/FormHeader.jsx";
import registerImg from "@icons/auth/register-img.svg";
import Input from "@containers/Form/Input/Input.jsx";
import PasswordInput from "@containers/Form/PasswordInput/PasswordInput.jsx";
import {Link} from "react-router-dom";
import AuthBtn from "@containers/Auth/AuthBtn/AuthBtn.jsx";
import FormBottom from "@containers/Auth/FormBottom/FormBottom.jsx";
import Checkbox from "@containers/Form/Checkbox/Checkbox.jsx";

const Registration = () => {
    return (
        <div className="register">
            <Block>
                <div className="register__header">
                    <FormHeader title="Реєстрація" description="Введіть дані, наведені нижче"
                                img={registerImg}
                    />
                </div>
                <div className="register__form-block">
                    <form className="register__form">
                        <div className="register__name">
                            <Input name="name" title="Ім'я" placeholder="Ваше ім'я"/>
                        </div>
                        <div className="register__login-input">
                            <Input name="login" title="Логін" placeholder="login"/>
                        </div>
                        <div className="register__email">
                            <Input name="email" title="Ел.пошта" placeholder="email@gmail.com"/>
                        </div>
                        <div className="register__password">
                            <PasswordInput name="password" title="Пароль" placeholder="password"/>
                        </div>
                        <div className="register__password-confirm">
                            <PasswordInput name="password-confirm" title="Підтвердження паролю"
                                placeholder="password"
                            />
                        </div>
                        <div className="register__user-conditions">
                            <div className="register__checkbox">
                                <Checkbox title="Погоджуюсь з " name="user-conditions" type="register" />
                            </div>
                        </div>
                        <div className="register__personal-data">
                            <Checkbox title="Надаю згоду на обробку персональних даних"
                                name="personal-data"
                            />
                        </div>
                        <AuthBtn title="Зареєструватись"/>
                    </form>
                </div>
                <FormBottom alternativeTitle="Або зареєструватись за допомогою"
                    registerText="У вас уже є акаунт?" link="/login"
                    registerLinkText="Виконайте вхід!"
                />
            </Block>
        </div>
    );
}

export default Registration;