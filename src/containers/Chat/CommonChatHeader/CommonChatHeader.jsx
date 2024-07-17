import styles from './CommonChatHeader.module.sass';

const CommonChatHeader = () => {
    return (
        <div className={styles['chat-header']}>
            <div className={`${styles['chat-header__title']} menu-title`}>Загальний чат</div>
            <div className={styles['chat-header__desc-block']}>
                <div className={`${styles['chat-header__members']} small`}>Учасників: 10</div>
                <div className={`${styles['chat-header__online']} small`}>Онлайн: 3</div>
            </div>
        </div>
    );
}

export default CommonChatHeader;