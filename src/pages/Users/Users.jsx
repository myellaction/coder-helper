import './Users.sass';
import Search from "@containers/Content/Search/Search.jsx";
import PostTypes from "@containers/Content/PostTypes/PostTypes.jsx";
import AvatarUsers from "@containers/Content/AvatarUsers/AvatarUsers.jsx";
import FilterWrapper from "@containers/Content/FilterWrapper/FilterWrapper.jsx";
import Pagination from "@containers/Content/Pagination/Pagination.jsx";
import {checkPage, getCurrentUsers} from "@pages/Users/usersHelper.js";

import {useState, useLayoutEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import classNames from "classnames";

const Users = ({usersTitle='Користувачі', placeholder='Пошук користувача...', columns=3}) => {
    const usersData = [
        {'name': 'Іван', 'rating': 100, 'articles': 0},
        {'name': 'Петро', 'rating': 150, 'articles': 0},
        {'name': 'Іван Нечуй Левицький', 'rating': 200, 'articles': 0},
        {'name': 'Колян', 'rating': 300, 'articles': 0},
        {'name': 'Anonim', 'rating': 1000, 'articles': 100},
        {'name': 'Іван', 'rating': 100, 'articles': 0},
        {'name': 'Петро', 'rating': 150, 'articles': 0},
        {'name': 'Іван Нечуй Левицький', 'rating': 200, 'articles': 0},
        {'name': 'Колян', 'rating': 300, 'articles': 0},
        {'name': 'Anonim', 'rating': 1000, 'articles': 100},
        {'name': 'Іван', 'rating': 100, 'articles': 0},
        {'name': 'Петро', 'rating': 150, 'articles': 0},
        {'name': 'Іван Нечуй Левицький', 'rating': 200, 'articles': 0},
        {'name': 'Колян', 'rating': 300, 'articles': 0},
        {'name': 'Anonim', 'rating': 1000, 'articles': 100},
    ];

    const [page, setPage] = useState(1);
    const [currentUsers, setCurrentUsers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    checkPage({page, setPage, searchParams});

    //pagination settings
    const perPage = 12;
    const pageCount = Math.ceil(usersData.length / perPage);

    useLayoutEffect(() => {
        const currentUsers = getCurrentUsers({usersData, perPage, searchParams});
        setCurrentUsers(currentUsers);
    }, [page]);

    const usersHtml = currentUsers.map((item, index) => {
        return (
            <div className="users__item" key={index}>
                <AvatarUsers {...item} />
            </div>
        );
    });

    return (
        <div className="users">
            <div className="users__title-part">
                <div className="users__title menu-title">{usersTitle}</div>
                <div className="users__search">
                    <Search placeholder={placeholder} />
                </div>
            </div>
            <div className="users__filter">
                <FilterWrapper>
                    <PostTypes articleTypes={['Рейтинг', "Нові", "Автори", "Коментатори"]} />
                </FilterWrapper>
            </div>
            <div className={`users__block users__block_${columns}-columns`}>
                {usersHtml}
            </div>
            {pageCount > 1 &&
                <div className="users__pages">
                    <Pagination page={page} pageCount={pageCount} />
                </div>
            }
        </div>
    );
}

export default Users;