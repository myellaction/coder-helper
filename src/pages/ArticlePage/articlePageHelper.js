export const changeSingleArticleStatus =
    ({id, status, setAction, setStatus, setIsOpenedOption, setTimer,
    actionRef}) => {
    if(status === 'toDelete'){
        prepareTimeout({id, setAction, setStatus, setTimer, actionRef});
    } else if(status === 'cancelDelete'){
        cancelDelete({setTimer, setAction});
    } else{
        setStatus(status);
    }

    if(!['toDelete', 'cancelDelete'].includes(status)){
        setIsOpenedOption(null)
    }
}


const prepareTimeout = ({actionRef, setAction, setStatus, setTimer}) => {
    const timerId = setTimeout(() => {
        if(actionRef.current === 'toDelete'){
            setStatus('deleted');
            setAction(null);
        }
    }, 5000);
    setAction('toDelete');
    setTimer(timerId);
}

const cancelDelete = ({setTimer, setAction}) => {
    setTimer(timer => {
        clearTimeout(timer);
        return null;
    })
    setAction(null);
}

