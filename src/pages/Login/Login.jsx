import './Login.sass';
import FormHeader from "@containers/Auth/FormHeader/FormHeader.jsx";
import loginImg from '@icons/auth/login-img.svg';
import Block from "@containers/Content/Block/Block.jsx";
import Input from "@containers/Form/Input/Input.jsx";
import PasswordInput from "@containers/Form/PasswordInput/PasswordInput.jsx";
import {Link} from "react-router-dom";
import FormBottom from "@containers/Auth/FormBottom/FormBottom.jsx";
import AuthBtn from "@containers/Auth/AuthBtn/AuthBtn.jsx";

const Login = () => {
    return (
        <div className="login">
            <Block>
                <div className="login__header">
                    <FormHeader title="Вхід користувача" description="Введіть дані, наведені нижче"
                        img={loginImg}
                    />
                </div>
                <div className="login__form-block">
                    <form className="login__form">
                        <div className="login__login-input">
                            <Input name="login" title="Логін" placeholder="login" />
                        </div>
                        <div className="login__password">
                            <PasswordInput name="password" title="Пароль" placeholder="password" />
                        </div>
                        <div className="login__change-password small">
                            <Link to="/" className="text-link">Забули пароль?</Link>
                        </div>
                        <AuthBtn title="Вхід" />
                    </form>
                </div>
                <FormBottom alternativeTitle="Або увійти за допомогою"
                    registerText="У вас немає акаунту?" link="/register"
                    registerLinkText="Зареєструйтесь зараз!"
                />
            </Block>
        </div>
    );
}

export default Login;