import './AvatarPage.sass';
import PageButton from "@containers/MyPage/PageButton/PageButton.jsx";

import messagesImg from '@icons/menu/messages.svg';
import plus from '@icons/my-page/plus.svg';
import okImg from '@icons/my-page/ok.svg';

import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import {NavLink} from "react-router-dom";

const AvatarPage = () => {
    return (
        <div className="avatar-page">
            <div className="avatar-page__first-btn">
                <PageButton type="message" img={messagesImg} title="Написати" />
            </div>
            <div className="avatar-page__avatar-block">
                <NavLink to="/my-page" className="avatar-page__avatar">
                    <Avatar size="60" />
                </NavLink>
            </div>
            <div className="avatar-page__second-btn">
                {/*<PageButton type="add" img={plus} title="В друзі" />*/}
                <PageButton type="friend" img={okImg} title="Друг" />
            </div>
        </div>
    );
}

export default AvatarPage;