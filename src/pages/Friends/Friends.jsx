import './Friends.sass';
import PageHeader from "@containers/MyPage/PageHeader/PageHeader.jsx";
import Users from "@pages/Users/Users.jsx";

const Friends = () => {
    return (
        <div className="friends">
            <div className="friends__header">
                <PageHeader/>
            </div>
            <Users usersTitle="Друзі" placeholder="Пошук серед друзів..." columns={2} />
        </div>
    );
}

export default Friends;