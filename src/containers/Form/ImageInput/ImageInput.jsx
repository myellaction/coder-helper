import './ImageInput.sass';
import {useEffect, useState} from "react";

const ImageInput = ({name, resetForm, noTitle=false, afterChange=false, resetImage=false}) => {
    const [image, setImage] = useState(null);

    const putImage = (e) => {
        const file = e.target.files[0];
        if(file){
            const filePath = URL.createObjectURL(file);
            setImage(filePath);
        } else {
            setImage(null);
        }

        if(afterChange){
            afterChange();
        }
    }

    useEffect(() => {
        setImage(null);
    }, [resetForm, resetImage]);

    return (
        <div className="image-input">
            <input type="file" name={name} onChange={putImage}
                   className="image-input__file" id={name}
            />
            <div className="image-input__label-block">
                {!noTitle && <div className="image-input__title small">Зображення</div>}
                <label htmlFor={name} className="image-input__label">
                    <div className="image-input__btn">Завантажити</div>
                </label>
                <div className="image-input__desc small">Максимальний розмір зображення 5 мб</div>
                <div className="image-input__show">
                    {image ? <img src={image} alt="image" className="image-input__image"/>
                        : <div className="image-input__default-title">Зображення не обрано</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ImageInput;