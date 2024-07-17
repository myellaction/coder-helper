import './ArticleHeader.sass';
import AvatarArticle from "@containers/Content/AvatarArticle/AvatarArticle.jsx";
import ArticleOptions from "@containers/Article/ArticleOptions/ArticleOptions.jsx";
import {changeSingleArticleStatus} from "@pages/ArticlePage/articlePageHelper.js";
import {useEffect, useRef, useState} from "react";
import {clickAction} from "../../../utils/actions.js";

const ArticleHeader = ({status, setStatus}) => {
    const [action, setAction] = useState('');
    const [timer, setTimer] = useState(null);
    const [isOpenedOption, setIsOpenedOption] = useState(null);

    const actionRef = useRef(action);
    actionRef.current = action;

    const closeBlock = (e) => {
        const target = e.target;
        const parentNode = target.parentNode;
        if(![target, parentNode].some(item =>
            item.classList.contains('article-options__options-dots'))){
            setIsOpenedOption(null);
        }
    }

    useEffect(() => {
        window.addEventListener(clickAction(), closeBlock);
        return () => window.removeEventListener(clickAction(), closeBlock);
    }, []);

    const changeArticleStatus = (id, status) => {
        changeSingleArticleStatus({id, status, setAction, setStatus,
            setIsOpenedOption, setTimer, actionRef});
    }

    return (
        <div className="article-header">
            <div className="article-page__user-info">
                <AvatarArticle status={status} action={action}/>
            </div>
            <div className="article-page__options">
                <ArticleOptions item={{id: 1, status: status, action: action}}
                                isOpenedOption={isOpenedOption} setOpenedOption={setIsOpenedOption}
                                changeArticleStatus={changeArticleStatus}
                />
            </div>
        </div>
    );
}

export default ArticleHeader;