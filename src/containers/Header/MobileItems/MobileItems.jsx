import myPage from "@icons/menu/my-page.svg";
import messagesIcon from "@icons/menu/messages.svg";
import friends from "@icons/menu/friends.svg";
import createArticle from "@icons/menu/create-article.svg";
import question from "@icons/menu/question.svg";
import wallet from "@icons/menu/wallet.svg";
import profileImg from "@icons/profile-menu/profile.svg";
import passImg from "@icons/profile-menu/change-pass.svg";
import logoutImg from "@icons/profile-menu/logout.svg";
import MobileItem from "@containers/Header/MobileItem/MobileItem.jsx";

const MobileItems = () => {
    const items1 = [
        {'img': myPage, 'title': 'Моя сторінка', 'link': '/my-page', part: 1},
        {'img': messagesIcon, 'title': 'Повідомлення', 'link': '/messages', part: 1},
        {'img': friends, 'title': 'Друзі', 'link': '/friends', part: 1},
    ];

    const items2 = [
        {'img': createArticle, 'title': 'Додати статтю', 'link': '/create-article', part: 2},
        {'img': question, 'title': 'Задати питання', 'link': '/question', part: 2},
        {'img': wallet, 'title': 'Поповнити', 'link': '/buy-rating', part: 2},
    ];

    const items3 = [
        {'img': profileImg, 'title': 'Профіль', 'link': '/profile'},
        {'img': passImg, 'title': 'Змінити пароль', 'link': '/change-password'},
        {'img': logoutImg, 'title': 'Вийти', 'link': '/logout', 'noArrow': true}
    ];

    const itemsHtml1 = items1.map((item, index) => {
        return <MobileItem {...item} key={index} />
    });

    const itemsHtml2 = items2.map((item, index) => {
        return <MobileItem {...item} key={index} />
    });

    const itemsHtml3 = items3.map((item, index) => {
        return <MobileItem {...item} key={index} />
    });

    return (
        <>
            <div className="mobile-menu__items">
                {itemsHtml1}
            </div>
            <hr className="menu__line mobile-menu__line"/>
            <div className="mobile-menu__items">
                {itemsHtml2}
            </div>
            <hr className="menu__line mobile-menu__line"/>
            <div className="mobile-menu__items">
                {itemsHtml3}
            </div>
        </>
    );
}

export default MobileItems;