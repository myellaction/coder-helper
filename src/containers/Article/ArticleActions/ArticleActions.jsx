import './ArticleActions.sass';
import Like from "@containers/Images/Like/Like.jsx";
import Dislike from "@containers/Images/Dislike/Dislike.jsx";
import classNames from "classnames";
import Comment from "@containers/Images/Comment/Comment.jsx";
import Views from "@containers/Content/Views/Views.jsx";

const ArticleActions = ({commented}) => {
    return (
        <div className="article-actions">
            <div className="article-actions__buttons">
                <div className="article-actions__like">
                    <Like/>
                    <div className="article-actions__btn-count">1</div>
                </div>
                <div className="article-actions__dislike">
                    <Dislike/>
                    <div className="article-actions__btn-count">1</div>
                </div>
                <div className={classNames("article-actions__comment",
                    {"article-actions__commented": commented})}>
                    <Comment/>
                    <div className="article-actions__btn-count">1</div>
                </div>
            </div>
            <Views/>
        </div>
    );
}

export default ArticleActions;