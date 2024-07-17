import Block from "@containers/Content/Block/Block.jsx";
import weekImg from "@img/article-img.jpg";
import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import Views from "@containers/Content/Views/Views.jsx";

const WeekArticle = () => {
    return (
        <div className="week-article">
            <Block>
                <div className="week-article__title menu-title">Матеріал тижня</div>
                <div className="week-article__img-block">
                    <a href="#">
                        <img className="week-article__img" src={weekImg} alt="Стаття тижня"/>
                    </a>
                    <a href="#author" className="week-article__avatar-wrapper">
                        <Avatar/>
                    </a>
                </div>
                <a href="#" className="week-article__article-title-link">
                    <div className="week-article__article-title semi-bold">Як встановити Докер</div>
                </a>
                <div className="week-article__meta">
                    <Views count={100}/>
                    <div className="week-article__date small">2 дні тому</div>
                </div>
            </Block>
        </div>
    );
}

export default WeekArticle;