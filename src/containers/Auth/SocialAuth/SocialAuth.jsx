import './SocialAuth.sass';
import googleImg from '@icons/auth/google-auth.svg';
import fbImg from '@icons/auth/fb-auth.svg';
import appleImg from '@icons/auth/apple-auth.svg';

const SocialAuth = () => {
    const items = [
        {'title': 'google', 'img': googleImg},
        {'title': 'facebook', 'img': fbImg},
        {'title': 'apple', 'img': appleImg}
    ]

    const itemsHtml = items.map((item, index) => {
        return (
            <div className="social-auth__item" key={index}>
                <img src={item.img} alt={item.title} />
            </div>
        )
    });

    return (
        <div className="social-auth">
            {itemsHtml}
        </div>
    );
}

export default SocialAuth;