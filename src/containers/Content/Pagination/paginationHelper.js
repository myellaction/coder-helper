export const getPagesArr = ({page, maxPages, withPages = 1}) => {
    const innerPages = [];

    for(let i = page - withPages; i <= page + withPages; i++){
        if(i>1 && i < maxPages){
            innerPages.push(i);
        }
        if(i >= maxPages){
            break;
        }
    }

    const pages = [1, ...innerPages, maxPages];
    if(pages[1] - pages[0] > 1){
        pages.splice(1, 0, '-');
    }

    if(pages[pages.length - 1] - pages[pages.length - 2] > 1){
        pages.splice(pages.length - 1, 0, '-');
    }

    return pages;
}