import './AvatarArticle.sass';
import Avatar from "../Avatar/Avatar.jsx";
import pinnedImg from '@icons/my-page/pinned.svg';
import hideImg from '@icons/my-page/hide-article.svg';
import deleteImg from '@icons/my-page/delete.svg';

const AvatarArticle = ({status, action}) => {
    const images = {
        'pinned': pinnedImg,
        'hide': hideImg,
        'toDelete': deleteImg
    }
    const statusImg = images[status];
    const actionImg = images[action];

    return (
        <div className="avatar-article">
            <a href="#" className="avatar-article__avatar"><Avatar /></a>
            <div className="avatar-article__info">
                <div className="avatar-article__author">
                    <a href="#" className="avatar-article__author-link">Іван</a>
                    {statusImg &&
                        <img className="avatar-article__img-status" src={statusImg} alt={status} />
                    }
                    {actionImg &&
                        <img className="avatar-article__img-status" src={actionImg} alt={action}/>
                    }
                </div>
                <div className="avatar-article__date small">2 дні тому</div>
            </div>
        </div>
    );
}

export default AvatarArticle;