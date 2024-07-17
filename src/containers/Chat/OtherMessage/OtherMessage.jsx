import './OtherMessage.sass';
import tail from '@icons/chat/other-tail.svg';
import Avatar from '@containers/Content/Avatar/Avatar.jsx';
import Views from "@containers/Content/Views/Views.jsx";

const OtherMessage = ({name, content, views, date, type}) => {

    return (
        <div className="other-mes">
            {type === 'common' &&
                <div className="other-mes__avatar">
                    <Avatar/>
                </div>
            }
            <div className="other-mes__block">
                <img src={tail}/>
                <div className="other-mes__wrapper">
                    {type === 'common' &&
                        <div className="other-mes__name semi-bold">{name}</div>
                    }
                    <div className="other-mes__content small">{content}</div>
                    <div className="other-mes__views-date">
                        {type === 'common' &&
                            <div className="other-mes__views">
                                <Views count={views}/>
                            </div>
                        }
                        <div className="other-mes__date small">{date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherMessage;