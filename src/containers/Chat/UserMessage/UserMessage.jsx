import './UserMessage.sass';
import tail from "@icons/chat/user-tail.svg";
import delImg from '@icons/chat/del-mes.svg';
import Views from "@containers/Content/Views/Views.jsx";
import {lazy, Suspense} from "react";

const UserMessage = ({content, views, date, type}) => {
    let Views;
    if(type === 'common'){
        Views = lazy(() => import("@containers/Content/Views/Views.jsx"));
    }

    return (
        <div className="user-mes">
            <div className="user-mes__img-block">
                <img src={delImg} className="user-mes__img" alt="remove-mes" />
            </div>
            <div className="user-mes__inner">
                <div className="user-mes__block">
                    <div className="user-mes__wrapper">
                        <div className="user-mes__content small">{content}</div>
                        <div className="user-mes__views-date">
                            {type === 'common' &&
                                <Suspense fallback={<div></div>}>
                                    <div className="user-mes__views">
                                        <Views count={views} white={true}/>
                                    </div>
                                </Suspense>
                            }
                            <div className="user-mes__date small">{date}</div>
                        </div>
                    </div>
                    <img src={tail}/>
                </div>
            </div>
        </div>
    );
}

export default UserMessage;