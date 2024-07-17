import './SingleArticle.sass';
import classNames from "classnames";
import ArticleHeader from "@containers/ArticlePage/ArticleHeader/ArticleHeader.jsx";
import articleImg from "@img/article-img.jpg";
import ArticleActions from "@containers/Article/ArticleActions/ArticleActions.jsx";
import Block from "@containers/Content/Block/Block.jsx";
import Tag from "@containers/Content/Tag/Tag.jsx";

const SingleArticle = ({status, setStatus}) => {
    const tags = ['Джанго', "php", 'Laravel', 'javascript',
        'Джанго', "php", 'Laravel', 'javascript','Джанго', "php", 'Laravel', 'javascript'
    ];
    const tagsHtml = tags.map((item, index) => {
        return (
            <div className="single-article__tag" key={index}>
                <Tag title={item} />
            </div>
        );
    });

    return (
        <div className="single-article">
            <Block cl={classNames({"hide-article" : status === 'hide'})}>
                {status === 'deleted' ? <div>Статтю видалено</div> : <>
                    <div className="single-article__header">
                        <ArticleHeader status={status} setStatus={setStatus}/>
                    </div>
                    <div className="single-article__img">
                        <img src={articleImg} alt="image" />
                    </div>
                    <div className="single-article__title menu-title">Як встановити Докер</div>
                    <div className="single-article__content">
                        <p>Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.</p>
                        <p>Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.</p>
                        <p>Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.Щоб розвернути сайт на докері треба його встановити спочатку.</p>
                    </div>
                    <div className="single-article__tags">
                        {tagsHtml}
                    </div>
                    <div className="single-article__actions">
                        <ArticleActions />
                    </div>
                </>}
            </Block>
        </div>
    );
}

export default SingleArticle;