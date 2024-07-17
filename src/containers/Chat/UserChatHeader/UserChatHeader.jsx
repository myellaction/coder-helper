import styles from './UserChatHeader.module.sass';
import {Link} from "react-router-dom";
import Avatar from "@containers/Content/Avatar/Avatar.jsx";
import Options from "@containers/Content/Options/Options.jsx";
import classNames from "classnames";

const UserChatHeader = () => {
    return (
        <div className={styles["chat-header"]}>
            <Link to="/my-page" className={styles["chat-header__left-part"]}>
                <div className={styles["chat-header__avatar"]}>
                    <Avatar/>
                </div>
                <div className={classNames(styles["chat-header__name"], 'semi-bold')}>Іван</div>
            </Link>
            <div className={styles["chat-header__right-part"]}>
                <Options/>
            </div>
        </div>
    );
}

export default UserChatHeader;