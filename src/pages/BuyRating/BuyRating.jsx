import './BuyRating.sass';
import Block from "@containers/Content/Block/Block.jsx";
import Input from "@containers/Form/Input/Input.jsx";
import Button from "@containers/Form/Button/Button.jsx";

const BuyRating = () => {
    return (
        <div className="buy-rating">
            <Block>
                <div className="buy-rating__title menu-title">Поповнити</div>
                <div className="buy-rating__desc">
                    <p>За кожне поповнення на 1 грн рейтинг збільшується на 1000 од.</p>
                    <p>Мінімальна сума поповнення: 1 грн</p>
                    <p>Максимальна сума поповнення: 10 грн</p>
                </div>
                <form>
                    <div className="buy-rating__inputs">
                        <div className="buy-rating__total">
                            <Input title="Сума поповнення, грн" name="total" placeholder="1" />
                        </div>
                        <div className="buy-rating__count">
                            <Input title="Кількість рейтингу, од." name="count" placeholder="1000" />
                        </div>
                    </div>
                    <div className="buy-rating__btns">
                        <div className="buy-rating__reset">
                            <Button type="reset" />
                        </div>
                        <div className="buy-rating__submit">
                            <Button type="submit" title="Оплатити" />
                        </div>
                    </div>
                </form>
            </Block>
        </div>
    );
}

export default BuyRating;