import './Menu.sass';
import myPage from '../../../assets/icons/menu/my-page.svg';
import messagesIcon from '../../../assets/icons/menu/messages.svg';
import friends from '../../../assets/icons/menu/friends.svg';
import createArticle from '../../../assets/icons/menu/create-article.svg';
import question from '../../../assets/icons/menu/question.svg';
import wallet from '../../../assets/icons/menu/wallet.svg';
import MenuItem from "../MenuItem/MenuItem.jsx";

const Menu = () => {
    const itemsData = [
        {'img': myPage, 'title': 'Моя сторінка', 'link': '/my-page', part: 1},
        {'img': messagesIcon, 'title': 'Повідомлення', 'link': '/messages', part: 1},
        {'img': friends, 'title': 'Друзі', 'link': '/friends', part: 1},
        {'img': createArticle, 'title': 'Додати статтю', 'link': '/create-article', part: 2},
        {'img': question, 'title': 'Задати питання', 'link': '/question', part: 2},
        {'img': wallet, 'title': 'Поповнити', 'link': '/buy-rating', part: 2},
    ];

    const items = itemsData.map((item, index) => {
        return (
            <MenuItem {...item} key={index} />
        );
    });

    return (
        <div className="menu">
            <div className="menu__box">
                <div className="menu__title menu-title">Меню</div>
                <div className="menu__items">
                    {items.filter(item => item.props.part === 1)}
                </div>
                <hr className="menu__line"/>
                <div className="menu__items">
                    {items.filter(item => item.props.part === 2)}
                </div>
            </div>
            <div className="menu__docs">
                <a href="#" className="menu__doc small">Політика конфіденційності</a>
                <a href="#" className="menu__doc small">Умови використання</a>
                <a href="#" className="menu__doc small">Використані технології</a>
            </div>
        </div>
    );
}

export default Menu;