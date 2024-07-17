import './Button.sass';

const Button = ({type='submit', title=''}) => {
    const buttonInfo = {
        'submit': {
            'title': 'Застосувати',
            'cl': 'form-button__submit'
        },
        'reset': {
            'title': 'Очистити',
            'cl': 'form-button__reset'
        }
    }
    return (
        <button type={type} className={`form-button ${buttonInfo[type].cl}`}>
            {title || buttonInfo[type].title}
        </button>
    );
}

export default Button;