import './Comment.sass';
import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import Like from "@containers/Images/Like/Like.jsx";
import Dislike from "@containers/Images/Dislike/Dislike.jsx";

const Comment = ({content}) => {
    return (
        <div className="comment">
            <div className="comment__header">
                <div className="comment__author-info">
                    <div className="comment__avatar">
                        <Avatar size="30" />
                    </div>
                    <div className="comment__name semi-bold">Іван</div>
                </div>
                <div className="comment__created small">2 дні тому</div>
            </div>
            <div className="comment__content small">{content}</div>
            <div className="comment__buttons">
                <div className="comment__like">
                    <Like size="small" />
                </div>
                <div className="comment__dislike">
                    <Dislike size="small" />
                </div>
            </div>
        </div>
    );
}

export default Comment;