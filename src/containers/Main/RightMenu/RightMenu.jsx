import './RightMenu.sass';
import WeekArticle from "@containers/RightMenu/WeekArticle/WeekArticle.jsx";
import Popular from "@containers/RightMenu/Popular/Popular.jsx";
import TopUsers from "@containers/RightMenu/TopUsers/TopUsers.jsx";

const RightMenu = () => {
    return (
        <div className="right-menu">
            <WeekArticle />
            <Popular />
            <TopUsers />
        </div>
    );
}

export default RightMenu;