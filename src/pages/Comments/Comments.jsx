import './Comments.sass';
import PageHeader from "@containers/MyPage/PageHeader/PageHeader.jsx";
import Search from "@containers/Content/Search/Search.jsx";
import FilterWrapper from "@containers/Content/FilterWrapper/FilterWrapper.jsx";
import PostTypes from "@containers/Content/PostTypes/PostTypes.jsx";
import Comment from '@containers/Comments/Comment/Comment.jsx';

const Comments = () => {
    const comments = [
        {'content': 'Дякую за даний матеріал. Цікава стаття. За допомогою статті тепер знаю, як налаштувати Докер на сервері.'},
        {'content': 'Дякую за даний матеріал. Цікава стаття. За допомогою статті тепер знаю, як налаштувати Докер на сервері.'},
    ]

    const commentsHtml = comments.map(item => {
        return <Comment {...item} />
    });

    return (
        <div className="comments">
            <div className="comments__header">
                <PageHeader/>
            </div>
            <div className="comments__title-part">
                <div className="comments__title menu-title">Коментарі</div>
                <div className="comments__search">
                    <Search placeholder="Пошук серед коментарів..."/>
                </div>
            </div>
            <div className="comments__filter">
                <FilterWrapper>
                    <PostTypes articleTypes={["Нові", "Минулі", "Популярні", 'Коментовані']}/>
                </FilterWrapper>
            </div>
            <div className="comments__content-block">
                {commentsHtml}
            </div>
        </div>
    );
}

export default Comments;