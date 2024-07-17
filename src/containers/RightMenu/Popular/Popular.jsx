import Views from "@containers/Content/Views/Views.jsx";
import Block from "@containers/Content/Block/Block.jsx";

const Popular = () => {
    const popularArticlesData = [
        {'title': 'Як встановити Докер', 'views': 100, 'date': '2 дні тому'},
        {'title': 'Як розвернути сайт на Джанго на сервері', 'views': 100, 'date': '2 дні тому'},
        {'title': 'Як розвернути сайт на Laravel на сервері', 'views': 100, 'date': '2 дні тому'},
    ];

    const popularArticles = popularArticlesData.map((item, index) => {
        return (
            <div className="popular__article" key={index}>
                <a href="#" className="popular__article-title-link">
                    <div className="popular__article-title semi-bold">{item.title}</div>
                </a>
                <div className="week-article__meta">
                    <Views count={item.views}/>
                    <div className="week-article__date small">{item.date}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="popular">
            <Block>
                <div className="week-article__title menu-title">Популярні статті</div>
                <div className="popular__articles">
                    {popularArticles}
                </div>
            </Block>
        </div>
    );
}

export default Popular;