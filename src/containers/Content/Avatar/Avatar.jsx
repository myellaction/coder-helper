import './Avatar.sass';
import avatar from '../../../assets/icons/avatar.png';

const Avatar = ({size, noOnline=false}) => {
    const sizeClass = size ? 'img-' + size : 'img-42';
    return (
        <div className={"avatar" + ' ' + sizeClass}>
            <img className={"avatar__img"} src={avatar} alt="Аватар"/>
            {!noOnline &&
                <div className="avatar__status">
                    <div className="avatar__status-circle"></div>
                </div>
            }
        </div>
    );
}

export default Avatar;