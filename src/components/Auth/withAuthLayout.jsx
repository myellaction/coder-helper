import './Auth.sass';
import uaLang from '@icons/lang/ua.svg';
import enLang from '@icons/lang/en.svg';
import {useEffect, useLayoutEffect, useState} from "react";
import classNames from "classnames";
import {onClickAction} from "../../utils/actions.js";

const withAuthLayout = (BaseComponent) => {
    const [lang, setLang] = useState('default');
    const [animation, setAnimation] = useState(null);

    useEffect(() => {
        if(lang !== 'default' && !animation){
            setAnimation(true);
        }
    }, [lang]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return props => {
        return (
            <section className="main auth__main">
                <div className="container">
                    <div className="main__block wrapper">
                        <div className="auth">
                            <div className="auth__header"
                                 {...{[onClickAction()]: () => setLang(lang => ['uk', 'default'].includes(lang) ? 'en' : 'uk')}}
                            >
                                <div className="auth__lang-block">
                                    <div
                                        className={classNames("top-profile__lang",
                                            {"top-profile__lang_selected": lang === 'uk' || lang === 'default'},
                                            {'auth__lang': !animation})}
                                    >
                                        <img className="top-profile__lang-img" src={uaLang} alt="Українська"/>
                                        <div className="top-profile__lang-title">Мова</div>
                                    </div>
                                    <div
                                        className={classNames("top-profile__lang", {"top-profile__lang_selected": lang === 'en'})}>
                                        <img className="top-profile__lang-img" src={enLang} alt="Українська"/>
                                        <div className="top-profile__lang-title">Language</div>
                                    </div>
                                </div>
                            </div>
                            <BaseComponent {...props} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withAuthLayout;