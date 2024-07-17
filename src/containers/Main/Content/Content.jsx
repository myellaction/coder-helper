import './Content.sass';
import classNames from "classnames";

const Content = (props) => {
    return (
        <div className={classNames("content", props.cl)}>
            {props.children}
        </div>
    );
}

export default Content;