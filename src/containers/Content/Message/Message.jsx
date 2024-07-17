import './Message.sass';
import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import {Link} from "react-router-dom";

const Message = ({content, name, created, you, isNew}) => {
    return (
        <Link to="/messages/chat" className="message">
            <div className="message__container">
                <div className="message__avatar">
                    <Avatar />
                </div>
                <div className="message__block">
                    <div className="message__name-created">
                        <div className="message__name-block">
                            <div className="message__name semi-bold">{name}</div>
                            {isNew && <div className="message__new"></div>}
                        </div>
                        <div className="message__created small">{created}</div>
                    </div>
                    <div className="message__content-block">
                        {you &&
                            <div className="message__user-avatar">
                                <Avatar size="20" noOnline={true} />
                            </div>
                        }
                        <div className="message__content small">{content}</div>
                    </div>
                </div>
            </div>
            <div className="message__line"></div>
        </Link>
    );
}

export default Message;