export const isMobile = () => /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i
    .test(navigator.userAgent);
export const clickAction = () => isMobile() ? 'touchend' : 'click';
export const onClickAction = () => isMobile() ? 'onTouchEnd' : 'onClick';

export const onTapClick = (handler) => {
    const action = onClickAction();
    return {[action]: handler};
}