import './InputPanel.sass';
import fileImg from '@icons/chat/file.svg';
import sendImg from '@icons/chat/send.svg';

import {useState, useRef, useEffect} from 'react';

const InputPanel = ({panelHeight, setPanelHeight}) => {
    const areaRef = useRef(null);
    const panelRef = useRef(null);

    const [mesText, setMesText] = useState('');
    const maxHeight = 80;

    useEffect(() => {
        areaRef.current.style.height = '0px';
        const areaHeight = areaRef.current.scrollHeight;
        areaRef.current.style.height = areaHeight + 'px';
        const currentPanelHeight = getComputedStyle(panelRef.current).height.slice(0, -2);
        if(currentPanelHeight !== panelHeight){
            setPanelHeight(currentPanelHeight);
        }
    }, [mesText]);

    let areaStyle = areaRef.current &&
        areaRef.current.scrollHeight > maxHeight ? {'overflowY': 'auto'} : null;

    return (
        <form className="chat-panel__form" method="post" encType="multipart/form-data">
            <div className="chat-panel" ref={panelRef}>
                <label htmlFor="mes-file" className="chat-panel__file-label">
                    <input className="none" name="mes-file" id="mes-file" type="file" />
                    <img src={fileImg} alt="file" />
                </label>
                <label htmlFor="mes-content" className="chat-panel__text-wrapper">
                    <textarea className="chat-panel__area small" name="content"
                              id="mes-content" placeholder="Текст повідомлення..."
                              value={mesText} onChange={e => setMesText(e.target.value)}
                              ref={areaRef} style={areaStyle}
                    />
                </label>
                <button className="chat-panel__btn" type="submit"><img src={sendImg} alt="send" /></button>
            </div>
        </form>
    );
}

export default InputPanel;