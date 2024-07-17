import 'simplebar-react/dist/simplebar.min.css';
import './ChatPage.sass';
import OtherMessage from "@containers/Chat/OtherMessage/OtherMessage.jsx";
import UserMessage from "@containers/Chat/UserMessage/UserMessage.jsx";
import classNames from "classnames";
import SimpleBar from "simplebar-react";
import InputPanel from "@containers/Chat/InputPanel/InputPanel.jsx";
import Block from "@containers/Content/Block/Block.jsx";
import {useChatHook} from "@pages/ChatPage/chatHook.js";
import CommonChatHeader from "@containers/Chat/CommonChatHeader/CommonChatHeader.jsx";
import UserChatHeader from "@containers/Chat/UserChatHeader/UserChatHeader.jsx";

const ChatPage = ({data:{messages, userId, type}}) => {

    const {blockPanelRef, chatBlockRef, blockRef, panelRef,
        loaded, setPanelHeight, panelHeight} = useChatHook();

    const messagesHtml = messages.map((item, index) => {
        let mes;
        if(item.userId !== userId){
            mes = <OtherMessage {...item} type={type} />;
        } else {
            mes = <UserMessage {...item} type={type} />
        }
        mes = <div className="chat__message-wrapper" key={index}>{mes}</div>;
        return mes;
    })

    const header = type === 'common' ? <CommonChatHeader /> : <UserChatHeader />;

    return (
        <Block cl="no-sides-padding" style={{height: '100%'}}>
            <div className="chat">
                <div className="chat__header">
                    {header}
                </div>
                <div className="chat__block-panel" ref={blockPanelRef}>
                    <div className={classNames("chat__block", {'hide': !loaded})} ref={blockRef}>
                        <SimpleBar className="chat__bar" autoHide={false} scrollableNodeProps={{ ref: chatBlockRef }}>
                            <div className="chat__block-inner">
                                <div className="chat__day">8 червня</div>
                                {messagesHtml}
                            </div>
                        </SimpleBar>
                    </div>
                    <div className="chat__panel" ref={panelRef}>
                        <InputPanel panelHeight={panelHeight} setPanelHeight={setPanelHeight} />
                    </div>
                </div>
            </div>
        </Block>
    );
}

export default ChatPage;