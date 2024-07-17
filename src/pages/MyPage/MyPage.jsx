import './MyPage.sass';
import PageHeader from "@containers/MyPage/PageHeader/PageHeader.jsx";
import Article from "@containers/Content/Article/Article.jsx";

import articleImg from '@img/article-img.jpg';

import {useState, useEffect, useRef} from "react";
import {changeStatus} from "@pages/MyPage/myPageHelpers.js";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { v4 as uuid } from 'uuid';
import Block from "@containers/Content/Block/Block.jsx";
import Tag from '@containers/Content/Tag/Tag.jsx';
import {clickAction} from "../../utils/actions.js";

const MyPage = () => {
    const [articles, setArticles] = useState([
        {id: 3, status: 'pinned', 'title': 'Докер', 'keyId': uuid()},
        {id: 1, status: 'published', 'title': 'Ларавель', 'keyId': uuid()},
        {id: 2, status: 'published', 'title': 'Питон', 'keyId': uuid()},
        {id: 4, status: 'hide', 'title': 'Джанго', 'keyId': uuid()}
    ]);

    const skills = ['javascript', 'python', 'php', 'React', 'Django', 'Laravel', 'html',
        'javascript', 'python', 'php', 'React', 'Django', 'Laravel', 'html'
    ];

    const [openedOption, setOpenedOption] = useState(null);

    const articlesRef = useRef(articles);
    articlesRef.current = articles;

    const cssArticlesRefs = useRef([]);

    const changeArticleStatus = (id, status) => {
        changeStatus({id, status, articles, articlesRef, setArticles, setOpenedOption});
    };

    const closeBlock = (e) => {
        const target = e.target;
        const parentNode = target.parentNode;
        if(![target, parentNode].some(item =>
            item.classList.contains('article-options__options-dots'))){
            setOpenedOption(null);
        }
    }

    useEffect(() => {
        window.addEventListener(clickAction(), closeBlock);

        cssArticlesRefs.current.forEach(item => {
            item.style.height = item.scrollHeight + 'px';
        });

        return () => window.removeEventListener(clickAction(), closeBlock);
    }, []);

    const articlesHtml = articles.map((item) => {
        return (
            <CSSTransition key={item.keyId} classNames="my-page__article" timeout={500}>
                <div className="my-page__article"
                     ref={el => cssArticlesRefs.current[item.id] = el}>
                    <Article img={articleImg} item={item}
                        isOpenedOption={item.id === openedOption}
                        setOpenedOption={setOpenedOption}
                        changeArticleStatus={changeArticleStatus}
                    />
                </div>
            </CSSTransition>
        )
    });

    const skillsHtml = skills.map(((item, index) => {
            return (
                <div className="my-page__tag" key={index}>
                    <Tag title={item}/>
                </div>
            );
        })
    );

    return (
        <div className="my-page">
            <div className="my-page__header">
                <PageHeader/>
            </div>
            <div className="my-page__about">
                <Block>
                    <div className="my-page__about-title menu-title">Про мене</div>
                    <div className="my-page__about-content">Пишу код на Python</div>
                </Block>
            </div>
            <div className="my-page__skills">
                <Block>
                    <div className="my-page__skills-title menu-title">Скіли</div>
                    <div className="my-page__skills-block">
                        {skillsHtml}
                    </div>
                </Block>
            </div>
            <TransitionGroup className="my-page__articles-block">
                {articlesHtml}
            </TransitionGroup>
        </div>
    );
}

export default MyPage;