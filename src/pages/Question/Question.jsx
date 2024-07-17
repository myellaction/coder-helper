import './Question.sass';
import Block from "@containers/Content/Block/Block.jsx";
import Input from "@containers/Form/Input/Input.jsx";
import Textarea from "@containers/Form/Textarea/Textarea.jsx";
import {useState} from "react";
import ImageInput from "@containers/Form/ImageInput/ImageInput.jsx";
import Button from "@containers/Form/Button/Button.jsx";

const Question = () => {
    const [reset, setReset] = useState(false);

    const onReset = () => {
        setReset(!reset);
    }

    return (
        <div className="question">
            <Block>
                <form onReset={onReset}>
                    <div className="question__title menu-title">Задати питання</div>
                    <div className="question__name">
                        <Input placeholder="Ваше ім'я" name="name" title="Ім'я" />
                    </div>
                    <div className="question__content">
                        <Textarea title="Текст" name="content" placeholder="Текст питання..." />
                    </div>
                    <div className="question__image">
                        <ImageInput resetForm={reset} name="image" />
                    </div>
                    <div className="question__btns">
                        <div className="question__reset">
                            <Button type="reset"/>
                        </div>
                        <div className="question__submit">
                            <Button type="submit" title="Відправити" />
                        </div>
                    </div>
                </form>
            </Block>
        </div>
    );
}

export default Question;