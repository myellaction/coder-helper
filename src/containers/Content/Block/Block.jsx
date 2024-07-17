import './Block.sass';
import classNames from "classnames";

const Block = ({cl, style, children}) => {
    return (
        <div className={classNames("block", {[cl]: cl})} style={style}>
            {children}
        </div>
    );
}

export default Block;