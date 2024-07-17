import './About.sass';
import Block from "@containers/Content/Block/Block.jsx";

const About = () => {
    return (
        <Block>
            <div className="about">
                <div className="about__title menu-title">Про проект</div>
                <div className="about__desc">
                    <p>Coder Helper - це соціальна мережа для програмістів. Тут ви можете розмістити статтю про те, як ви вирішили певне питання, зв’язане з програмуванням або версткою.</p>
                    <p>Також на сайті є загальний чат для спілкування, можливість додавати в друзі та спілкуватись через особисті повідомлення. </p>
                    <p>За потреби ви можете задати питання нам (зліва в меню є кнопка). Якщо ми вже вирішували подібні питання, то допоможем вам з цим.</p>
                </div>
            </div>
        </Block>
    );
}

export default About;