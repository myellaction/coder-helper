import './ArticlePage.sass';
import {useState} from "react";
import SingleArticle from "@containers/ArticlePage/SingleArticle/SingleArticle.jsx";
import ArticleComments from "@containers/ArticlePage/ArticleComments/ArticleComments.jsx";
import AddComment from "@containers/ArticlePage/AddComment/AddComment.jsx";

const ArticlePage = () => {
    const [status, setStatus] = useState('');

    return (
        <div className="article-page">
            <div className="article-page__article">
                <SingleArticle status={status} setStatus={setStatus} />
            </div>
            {status !== 'deleted' && <>
            <div className="article-page__comments">
                <ArticleComments />
            </div>
            <div className="article-page__add-comment">
                <AddComment />
            </div>
            </>}
        </div>
    );
}

export default ArticlePage;