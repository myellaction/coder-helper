import {useEffect, useRef, useState} from "react";

export const useChatHook = () => {
    const blockPanelRef = useRef(null);
    const chatBlockRef = useRef(null);
    const blockRef = useRef(null);
    const panelRef = useRef(null);

    const [loaded, setLoaded] = useState(false);
    const [panelHeight, setPanelHeight] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            chatBlockRef.current.scrollTo({
                top: chatBlockRef.current.scrollHeight + 100,
                behaviour: 'smooth'
            });
            setLoaded(true);
        }, 1);
    }, []);

    useEffect(() => {
        const blockPanelHeight = getComputedStyle(blockPanelRef.current).height.slice(0, -2);
        const currentPanelHeight = getComputedStyle(panelRef.current).height.slice(0, -2);
        const marginBottom = getComputedStyle(blockRef.current).marginBottom.slice(0, -2);
        blockRef.current.style.height =  blockPanelHeight - currentPanelHeight - marginBottom + 'px';
    }, [panelHeight]);

    return {blockPanelRef, chatBlockRef, blockRef, panelRef, loaded,
        setPanelHeight, panelHeight};
}