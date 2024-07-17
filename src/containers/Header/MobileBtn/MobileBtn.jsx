import './MobileBtn.sass';
import classNames from "classnames";
import {onTapClick} from "../../../utils/actions.js";

const MobileBtn = ({isOpened, setIsOpened}) => {
    return (
        <div className="mobile-btn" {...onTapClick(() => setIsOpened(!isOpened))}>
            <div className="mobile-btn__wrapper">
                <div className={classNames("mobile-btn__elem",
                    {"mobile-btn__elem-active": isOpened})}
                >
                </div>
                <div className={classNames("mobile-btn__elem",
                    {"mobile-btn__elem-active": isOpened})}
                >
                </div>
                <div className={classNames("mobile-btn__elem",
                    {"mobile-btn__elem-active": isOpened})}
                >
                </div>
            </div>
        </div>
    );
}

export default MobileBtn;