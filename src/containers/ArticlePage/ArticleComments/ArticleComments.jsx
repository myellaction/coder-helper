import './ArticleComments.sass';
import Comment from "@containers/Comments/Comment/Comment.jsx";
import {useLayoutEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {onClickAction} from "../../../utils/actions.js";

const ArticleComments = () => {
    const step = 3;
    const [offset, setOffset] = useState(step);
    const [maxOffset, setMaxOffset] = useState(false);
    const comments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const commentsHtml = [];

    for(let i = 0; i < offset; i++){
        if(comments[i]){
            commentsHtml.push(
                <CSSTransition key={i} timeout={300} classNames="article-comments__comment" >
                    <Comment content="Дякую за даний матеріал. Цікава стаття. За допомогою статті тепер знаю,
                        як налаштувати Докер на сервері."
                    />
                </CSSTransition>
            );
        } else {
            break
        }
    }

    const remainsCommentsCount = () => {
        if(comments.length - offset >= step){
            return step
        } else {
            return comments.length - offset;
        }
    }

    const onClick = () => {
        setOffset(offset + step);
        if (offset + step >= comments.length){
            setMaxOffset(true);
        }
    }

    useLayoutEffect(() => {
        if(comments.length <= step){
            setMaxOffset(true);
        }
    }, []);

    return (
        <div className="article-comments">
            <div className="article-comments__title menu-title">{comments.length} коментарів</div>
            <TransitionGroup className="article-comments__block">
                {commentsHtml}
            </TransitionGroup>
            {!maxOffset &&
                <div className="article-comments__show" {...{[onClickAction()]: onClick}} >
                    <div>Показати ще {remainsCommentsCount()} коментарів</div>
                </div>
            }
        </div>
    );
}

export default ArticleComments;