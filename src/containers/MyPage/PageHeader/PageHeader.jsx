import './PageHeader.sass';
import userBg from '@img/user-bg.jpg';
import Rating from "@containers/Content/Rating/Rating.jsx";
import AvatarPage from "@containers/MyPage/AvatarPage/AvatarPage.jsx";
import {Link} from "react-router-dom";

const PageHeader = () => {
    const userInfo = {
        'articles': 1,
        'comments': 3,
        'friends': 10,
        'name': 'Іван',
        'status': 'учень',
        'rating': 1000
    }

    return (
        <div className="page-header">
            <img src={userBg} alt="background" className="page-header__img" />
            <div className="page-header__block">
                <div className="page-header__avatar-block">
                    <AvatarPage />
                </div>
                <div className="page-header__info">
                    <Link to="/my-page" className="page-header__item">
                        <div className="page-header__item-info menu-title">{userInfo.articles}</div>
                        <div className="page-header__item-title">стаття</div>
                    </Link>
                    <Link to="/my-page/comments" className="page-header__item">
                        <div className="page-header__item-info menu-title">{userInfo.comments}</div>
                        <div className="page-header__item-title">коментарі</div>
                    </Link>
                    <Link to="/friends" className="page-header__item">
                        <div className="page-header__item-info menu-title">{userInfo.friends}</div>
                        <div className="page-header__item-title">друзів</div>
                    </Link>
                </div>
                <div className="page-header__item page-header__main-item">
                    <Link to="/my-page" className="page-header__item-info menu-title">{userInfo.name}</Link>
                    <div className="page-header__item-title">{userInfo.status}</div>
                </div>
                <div className="page-header__rating">
                    <Rating rating={userInfo.rating} />
                </div>
            </div>
        </div>
    );
}

export default PageHeader;