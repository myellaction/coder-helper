import './Messages.sass';
import Block from "@containers/Content/Block/Block.jsx";
import Message from "@containers/Content/Message/Message.jsx";

const Messages = () => {
    const messages = [
        {
            'content': 'Привіт. Як справи? Сьогодні дивився цікавий фільм.',
            'name': 'Іван',
            'created': '2 дні тому'
        },
        {
            'content': 'Привіт. Як справи? Сьогодні дивився цікавий фільм.',
            'name': 'Іван',
            'created': '2 дні тому',
            'isNew': true
        },
        {
            'content': 'Привіт. Як справи? Сьогодні дивився цікавий фільм.',
            'name': 'Іван',
            'created': '2 дні тому',
            'you': true
        },
    ];

    const messagesHtml = messages.map(item => {
        return <Message {...item} />
    });

    return (
        <div className="messages">
            <Block>
                <div className="messages__title menu-title">Повідомлення</div>
                <div className="messages__block">
                    {messagesHtml}
                </div>
            </Block>
        </div>
    );
}

export default Messages;