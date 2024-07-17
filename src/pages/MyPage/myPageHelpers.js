export const changeStatus = ({id, status, articles, articlesRef, setArticles, setOpenedOption}) => {
    const index = articles.findIndex(item => item.id === id);
    const newArticles = articles.slice();

    if(status === 'toDelete'){
        prepareTimeout({id, newArticles, setArticles, articlesRef, index});
    } else if(status === 'cancelDelete'){
        cancelDelete({newArticles, index});
    } else if(status === 'pinned') {
        makePinned({id, index, newArticles});
    } else if(status === 'unpinned') {
        makeUnpinned({newArticles, index});
    } else if(status === 'hide' && newArticles[index].status === 'pinned'){
        makeUnpinnedWithHide({status, newArticles, id, index});
    } else {
        newArticles[index].status = status;
    }

    if(!['toDelete', 'cancelDelete'].includes(status)){
        setOpenedOption(null)
    }

    setArticles(newArticles);
}

const prepareTimeout = ({id, index, setArticles, newArticles, articlesRef}) => {
    const timerId = setTimeout(() => {
        newArticles = articlesRef.current.slice();
        const index = newArticles.findIndex(item => item.id === id);
        if(newArticles[index].action === 'toDelete'){
            newArticles.splice(index, 1);
            setArticles(newArticles);
        }
    }, 5000);
    newArticles[index].action = 'toDelete';
    newArticles[index].timerId = timerId;
}

const cancelDelete = ({newArticles, index}) => {
    const timer = newArticles[index].timerId;
    if(timer){
        clearTimeout(timer);
    }
    newArticles[index].action = null;
    newArticles[index].timer = null;
}

const makePinned = ({newArticles, id, index}) => {
    if(newArticles[index].status !== 'pinned'){
        const prevPinnedIndex = newArticles.findIndex(item => item.status === 'pinned');
        const prevArticle = newArticles[prevPinnedIndex];
        if(prevPinnedIndex !== -1 && prevArticle.id > newArticles[newArticles.length - 1].id){
            newArticles.splice(prevPinnedIndex, 1);
        } else {

            if(prevPinnedIndex !== -1){
                prevArticle.status = 'published';
                newArticles.splice(prevPinnedIndex, 1);
                let nextElem = newArticles.findIndex(item => item.id > prevArticle.id);
                if(nextElem === -1){
                    nextElem = 0;
                }
                newArticles.splice(nextElem, 0, prevArticle);
            }

            const pinnedArticleIndex = newArticles.findIndex(item => item.id === id);
            const pinnedArticle = newArticles[pinnedArticleIndex];
            pinnedArticle.status = 'pinned';
            newArticles.splice(pinnedArticleIndex, 1);
            newArticles.splice(0, 0, pinnedArticle);
        }
    }
}

const makeUnpinned = ({newArticles, index}) => {
    const currentArticle = newArticles[index];
    currentArticle.status = 'published';
    newArticles.splice(index, 1);
    if(newArticles.length === 0 || currentArticle.id < newArticles[newArticles.length - 1].id){
        let nextElem = newArticles.findIndex(item => item.id > currentArticle.id);
        if(nextElem === -1){
            nextElem = 0;
        }
        newArticles.splice(nextElem, 0, currentArticle);
    }
}

const makeUnpinnedWithHide = ({newArticles, index, id, status}) => {
    makeUnpinned({newArticles, index});
    const currentArticleIndex = newArticles.findIndex(item => item.id === id);
    newArticles[currentArticleIndex].status = status;
}