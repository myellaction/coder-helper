import './AddComment.sass';
import Block from "@containers/Content/Block/Block.jsx";
import Input from "@containers/Form/Input/Input.jsx";
import Textarea from "@containers/Form/Textarea/Textarea.jsx";
import Button from "@containers/Form/Button/Button.jsx";

const AddComment = () => {
    return (
        <div className="add-comment">
            <Block>
                <div className="add-comment__title menu-title">Додати коментар</div>
                <div className="add-comment__name">
                    <Input name="name" title="Ім'я" placeholder="Ваше ім'я" />
                </div>
                <div className="add-comment__content">
                    <Textarea cl="h-100" name="content" title="Текст" placeholder="Текст коментарю" />
                </div>
                <div className="add-comment__btn">
                    <Button title="Відправити" />
                </div>
            </Block>
        </div>
    );
}

export default AddComment;