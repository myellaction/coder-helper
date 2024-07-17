const getCurrentPage = (searchParams) => {
    const page = Number(searchParams.get('page')) || 1;
    return page;
}

export const getCurrentUsers = ({usersData, perPage, searchParams}) => {
    const page = getCurrentPage(searchParams);
    const start = (page - 1) * perPage;
    const currentUsers = usersData.slice(start, start + perPage);
    return currentUsers;
}

export const checkPage = ({page, setPage, searchParams}) => {
    const currentPage = getCurrentPage(searchParams);
    if(page !== currentPage){
        setPage(currentPage);
    }
}