export const onKeyDown = ({e, inputValue, inputTags, setInputTags, setInputValue,
    isFocused, setIsFocused}) => {
    if(!isFocused){
        setIsFocused(true);
    }
    if([' ', 'Enter'].includes(e.key)){
        if(inputValue.length > 0){
            addTag({setInputTags, setInputValue, inputValue, inputTags});
        }
        e.preventDefault();
    } else if(e.key === 'Backspace'){
        if(inputValue.length === 0){
            setInputTags(inputTags => [...inputTags.slice(0, inputTags.length - 1)]);
        }
    }
}

export const handleWindowClick = ({e, inputRef, tagsBlockRef, setIsFocused}) => {
    if(e.target !== inputRef.current && e.target !== tagsBlockRef.current){
        tagsBlockRef.current.classList.remove('tags__block_focus');
        setIsFocused(false);
    } else if(e.target === tagsBlockRef.current || e.target === inputRef.current){
        inputRef.current.focus();
        setIsFocused(true);
    }

}

export const addTag = ({setInputTags, inputTags, inputValue, setInputValue}) => {
    if(!inputTags.includes(inputValue)){
        setInputTags(inputTags => [...inputTags, inputValue]);
        setInputValue('');
    }
}

export const removeTag = ({e, setInputTags}) => {
    let target = e.target;
    if(e.target.tagName === 'IMG'){
        target = e.target.parentNode;
    }
    const tag = target.previousElementSibling.textContent;
    setInputTags(inputTags => {
        const newTags = inputTags.slice();
        newTags.splice(newTags.indexOf(tag), 1);
        return newTags;
    });
}

