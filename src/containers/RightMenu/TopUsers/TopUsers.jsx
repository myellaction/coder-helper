import Block from "@containers/Content/Block/Block.jsx";
import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import Rating from "@containers/Content/Rating/Rating.jsx";

const TopUsers = () => {
    const usersInfo = [
        {'name': 'Іван', 'rating': 1000, 'articleCount': 3},
        {'name': 'Іван', 'rating': 1000, 'articleCount': 3},
        {'name': 'Іван', 'rating': 1000, 'articleCount': 3},
        {'name': 'Іван', 'rating': 1000, 'articleCount': 3},
        {'name': 'Іван', 'rating': 1000, 'articleCount': 3},
    ];

    const usersHtml = usersInfo.map((item, index) => {
        return (
            <TopUser {...item} key={index} />
        );
    })

    return (
        <div className="top-users">
            <Block>
                <div className="week-article__title menu-title">Топ користувачів</div>
                <div className="top-users__block">
                    {usersHtml}
                </div>
            </Block>
        </div>
    );
}

const TopUser = ({name, rating, articleCount}) => {
    return (
        <div className="user-info">
            <a href="#" className="user-info__avatar">
                <Avatar />
            </a>
            <div className="user-info__meta">
                <div className="user-info__rating">
                    <Rating rating={rating} />
                </div>
                <div className="user-info__name-articles">
                    <a href="#" className="user-info__name">{name}</a>
                    {articleCount > 0 &&
                        <div className="user-info__articles small">{articleCount} статті</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default TopUsers;