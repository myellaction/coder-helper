import { json, useLoaderData } from "react-router-dom";
import Home from "@pages/Home/Home.jsx";
import Users from "@pages/Users/Users.jsx";
import About from "@pages/About/About.jsx";
import {prepareAuthPage, preparePage} from "./utils/routeHelper.jsx";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Friends from "@pages/Friends/Friends.jsx";
import Comments from "@pages/Comments/Comments.jsx";
import Messages from "@pages/Messages/Messages.jsx";
import ChatPage from "@pages/ChatPage/ChatPage.jsx";
import CreateArticle from "@pages/CreateArticle/CreateArticle.jsx";
import Question from "@pages/Question/Question.jsx";
import BuyRating from "@pages/BuyRating/BuyRating.jsx";
import Profile from "@pages/Profile/Profile.jsx";
import ArticlePage from "@pages/ArticlePage/ArticlePage.jsx";
import Login from "@pages/Login/Login.jsx";
import Registration from "@pages/Registration/Registration.jsx";

const routes = [
    {
        path: "/",
        /*loader: async() => {
            let response = await fetch('http://141.144.242.171/api/categories/');
            return await response.json();
        },*/
        Component() {
            //let data = useLoaderData();
            return preparePage(Home) //, data);
        },
    },
    {
        path: "/users",
        Component() {
            return preparePage(Users);
        },
    },
    {
        path: "/common-chat",
        Component() {
            const userId = 2;
            const messages = [
                {
                    'name': 'Іван',
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'views': '100',
                    'date': '10:15',
                    'userId': 1
                },
                {
                    'name': 'Іван',
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'views': '100',
                    'date': '10:15',
                    'userId': 2
                },
                {
                    'name': 'Іван',
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'views': '100',
                    'date': '10:15',
                    'userId': 1
                },
                {
                    'name': 'Іван',
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела?',
                    'views': '100',
                    'date': '10:15',
                    'userId': 1
                },

            ];
            return preparePage(ChatPage, {userId, messages, type: 'common'});
        },
    },
    {
        path: "/info",
        Component() {
            return preparePage(About);
        },
    },
    {
        path: "/my-page",
        Component() {
            return preparePage(MyPage);
        },
    },
    {
        path: '/friends',
        Component(){
            return preparePage(Friends);
        }
    },
    {
        path: '/my-page/comments',
        Component(){
            return preparePage(Comments);
        }
    },
    {
        path: '/messages',
        Component(){
            return preparePage(Messages);
        }
    },
    {
        path: '/messages/chat',
        Component(){
            const userId = 2;

            const messages = [
                {
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'created': '10:15',
                    'userId': 1,
                    'date': '10:15',
                },
                {
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'created': '10:15',
                    'userId': 2,
                    'date': '10:15',
                },
                {
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'created': '10:15',
                    'file': 'image.jpeg',
                    'file_url': 'https://google.com',
                    'userId': 1,
                    'date': '10:15',
                },
                {
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'created': '10:15',
                    'userId': 2,
                    'date': '10:15',
                },
                {
                    'content': 'Добрий день. Мене звати Іван. Как у вас дела? Что делаете?',
                    'created': '10:15',
                    'file': 'image.jpeg',
                    'file_url': 'https://google.com',
                    'userId': 1,
                    'date': '10:15',
                },
            ];
            return preparePage(ChatPage, {userId, messages, type: 'user'});
        }
    },
    {
        path: '/create-article',
        Component(){
            return preparePage(CreateArticle);
        }
    },
    {
        path: '/question',
        Component(){
            return preparePage(Question);
        }
    },
    {
        path: '/buy-rating',
        Component(){
            return preparePage(BuyRating);
        }
    },
    {
        path: '/profile',
        Component(){
            return preparePage(Profile);
        }
    },

    {
        path: '/article',
        Component(){
            return preparePage(ArticlePage);
        }
    },
    {
        path: '/login',
        Component(){
            return prepareAuthPage(Login);
        }
    },
    {
        path: '/register',
        Component(){
            return prepareAuthPage(Registration);
        }
    }
];

export default routes;