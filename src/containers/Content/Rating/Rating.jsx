import './Rating.sass';
import ratingImg from "@icons/rating.svg";

const Rating = ({rating}) => {
    return (
        <div className="rating">
            <img src={ratingImg} className="rating__img"/>
            <div className="rating__value">{rating}</div>
        </div>
    );
}

export default Rating;