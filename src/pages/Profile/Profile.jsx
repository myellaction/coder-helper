import './Profile.sass';
import Block from "@containers/Content/Block/Block.jsx";
import Input from "@containers/Form/Input/Input.jsx";
import Select from "@containers/Form/Select/Select.jsx";
import {useState} from "react";
import Textarea from "@containers/Form/Textarea/Textarea.jsx";
import Tags from "@containers/Form/Tags/Tags.jsx";
import SelectAvatars from "@containers/Form/SelectAvatars/SelectAvatars.jsx";
import Button from "@containers/Form/Button/Button.jsx";
import ImageInput from "@containers/Form/ImageInput/ImageInput.jsx";


const Profile = () => {
    const [reset, setReset] = useState(false);
    const [resetSelect, setResetSelect] = useState(false);
    const [resetImage, setResetImage] = useState(false);

    const selectItems = [
        {'title': "учень", 'value': 'student'},
        {'title': "програміст", 'value': 'developer'},
        {'title': "верстальник", 'value': 'htmlDeveloper'},
        {'title': "викладач", 'value': 'teacher'},
    ];

    const onReset = () => {
        setReset(!reset);
    }

    return (
        <div className="profile">
            <Block>
                <div className="profile__title menu-title">Профіль</div>
                <form onReset={onReset}>
                    <div className="profile__block">
                        <div className="profile__name">
                            <Input name="name" placeholder="Ваше ім'я" title="Ім'я" />
                        </div>
                        <div className="profile__login">
                            <Input name="login" placeholder="login" title="Логін" />
                        </div>
                        <div className="profile__email">
                            <Input name="email" placeholder="email@gmail.com" title="Ел. пошта" />
                        </div>
                        <div className="profile__status">
                            <Select name="status" placeholder="Оберіть статус" title="Статус"
                                items={selectItems} resetForm={reset}
                            />
                        </div>
                        <div className="profile__description">
                            <Textarea cl="h-100" name="description" title="Про мене"
                                placeholder="Пишу код на PHP..."
                            />
                        </div>
                        <div className="profile__skills">
                            <Tags resetForm={reset} />
                        </div>
                        <div className="profile__avatar-select">
                            <div className="profile__avatar-title small">Аватар</div>
                            <div className="profile__avatar-description">
                                (ви можете обрати серед запропонованих або завантажити власний)
                            </div>
                            <div className="profile__avatar-block">
                                <SelectAvatars resetForm={reset} resetSelect={resetSelect}
                                    name="avatar_id" afterChange={() => setResetImage(value => !value)}
                                />
                            </div>
                            <div className="profile__avatar-load">
                                <ImageInput resetForm={reset} noTitle={true} name="avatar_img"
                                    afterChange={() => setResetSelect(resetSelect => !resetSelect)}
                                    resetImage={resetImage}
                                />
                            </div>
                        </div>
                        <div className="profile__btn">
                            <Button type="submit" title="Зберегти" />
                        </div>
                    </div>
                </form>
            </Block>
        </div>
    );
}

export default Profile;