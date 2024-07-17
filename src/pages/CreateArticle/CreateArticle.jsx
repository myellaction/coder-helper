import './CreateArticle.sass';
import Block from "@containers/Content/Block/Block.jsx";
import Input from "@containers/Form/Input/Input.jsx";
import Textarea from "@containers/Form/Textarea/Textarea.jsx";
import Tags from "@containers/Form/Tags/Tags.jsx";
import ImageInput from '@containers/Form/ImageInput/ImageInput.jsx';
import {useState} from "react";
import Button from "@containers/Form/Button/Button.jsx";

const CreateArticle = () => {
    const [reset, setReset] = useState(false);

    const onReset = () => {
        setReset(!reset);
    }

    return (
        <div className="create-article">
            <Block>
                <div className="create-article__title menu-title">Додати статтю</div>
                <form className="create-article__form" onReset={onReset}>
                    <div className="create-article__block">
                        <div className="create-article__name-input">
                            <Input name="title" placeholder="Як писати чистий код..." title="Назва" />
                        </div>
                        <div className="create-article__content-input">
                            <Textarea name="content" placeholder="Текст статті..." title="Текст" />
                        </div>
                        <div className="create-article__tags">
                            <Tags resetForm={reset} />
                        </div>
                        <div className="create-article__image">
                            <ImageInput name="image" resetForm={reset} />
                        </div>
                        <div className="create-article__btns">
                            <div className="create-article__reset">
                                <Button type="reset" />
                            </div>
                            <div className="create-article__submit">
                                <Button type="submit" title="Опублікувати" />
                            </div>
                        </div>
                    </div>
                </form>
            </Block>
        </div>
    );
}

export default CreateArticle;