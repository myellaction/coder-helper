import './Main.sass';
import Menu from "../../containers/Main/Menu/Menu.jsx";
import RightMenu from "../../containers/Main/RightMenu/RightMenu.jsx";
import Content from "../../containers/Main/Content/Content.jsx";
import {useLocation} from 'react-router-dom';
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import classNames from "classnames";

const withMainLayout = (BaseComponent) => {
    const [resize, setResize] = useState(false);

    const resizeRef = useRef();
    resizeRef.current = resize;

    const makeResize = () => {
        setResize(!resizeRef.current);
    }

    useEffect(() => {
        window.addEventListener('resize', makeResize)
        return () => window.removeEventListener('resize', makeResize);
    }, []);

    return props => {
        const locationInfo = useLocation();
        const pathName = locationInfo.pathname;
        const withoutRightMenuWays = ['/users', '/create-article', '/article'];
        const chatPageCl = ['/common-chat', '/messages/chat'].includes(pathName) ? 'chat-page' : null;

        useLayoutEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return (
            <section className="main">
                <div className="container">
                    <div className={classNames("main__block wrapper", chatPageCl)}>
                        <div className="main__menu">
                            <Menu/>
                        </div>
                        <Content cl={chatPageCl}>
                            <BaseComponent {...props} />
                        </Content>
                        {!withoutRightMenuWays.includes(pathName) && <RightMenu/>}
                    </div>
                </div>
            </section>
        );
    }
}

export default withMainLayout;