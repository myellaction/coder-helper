import './AvatarUsers.sass';
import avatarImg from '@icons/avatar.png';
import ratingImg from '@icons/rating.svg';
import Avatar from "@containers/Content/Avatar/Avatar.jsx";

const AvatarUsers = ({name, rating, articles}) => {
    return (
        <div className="avatar-users">
            <a href="#" className="avatar-users__link">
                <Avatar size="60" />
            </a>
            <div className="avatar-users__right-part">
                <div className="avatar-users__rating-block">
                    <img src={ratingImg} alt="rating" />
                    <div className="avatar-users__rating-count">{rating}</div>
                </div>
                <a href="#" className="avatar-users__name semi-bold">{name}</a>
                {articles > 0 &&
                    <div className="avatar-users__articles-count small">{articles} статті</div>
                }
            </div>
        </div>
    );
}

export default AvatarUsers;