import './Article.sass';

import Block from '../Block/Block.jsx';
import AvatarArticle from "../AvatarArticle/AvatarArticle.jsx";
import ArticleTags from "@containers/Article/ArticleTags/ArticleTags.jsx";
import ArticleActions from "@containers/Article/ArticleActions/ArticleActions.jsx";
import classNames from "classnames";
import ArticleOptions from "@containers/Article/ArticleOptions/ArticleOptions.jsx";
import {Link} from "react-router-dom";


const Article = ({item, img, isOpenedOption, setOpenedOption, commented=false,
                 changeArticleStatus}) => {
    let status, title, action;
    if(item){
        status = item.status;
        title = item.title;
        action = item.action;
    }

    let imgHtml;
    if(img) {
        imgHtml = (
            <Link to="/article" className="article__img-link">
                <img className="article__img" src={img} alt="Зображення статті"/>
            </Link>
        );
    }

    return (
        <Block cl={classNames({"hide-article" : status === 'hide'})}>
            <div className="article">
                <div className="article__header">
                    <AvatarArticle status={status} action={action} />
                    {item &&
                        <ArticleOptions item={item} changeArticleStatus={changeArticleStatus}
                            isOpenedOption={isOpenedOption}
                            setOpenedOption={setOpenedOption}
                        />
                    }
                </div>
                {imgHtml}
                <div className="article__title">
                    <Link to="/article">{title || 'Як встановити за налаштувати Джанго'}</Link>
                </div>
                <div className="article__tags">
                    <ArticleTags />
                </div>
                <ArticleActions commented={commented} />
            </div>
        </Block>
    );
}

export default Article;