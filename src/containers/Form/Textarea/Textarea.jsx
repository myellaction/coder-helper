import './Textarea.sass';
import React from 'react';
import classNames from "classnames";
import {clickAction} from "../../../utils/actions.js";

class Textarea extends React.Component{
    constructor(props){
        super(props);
        this.state = {'isFocused': false, 'value': ''};
        this.textareaRef = React.createRef();
        this.removeFocus = this.removeFocus.bind(this);
        this.makeFocus = this.makeFocus.bind(this);
    }

    removeFocus(e){
        if(e.target !== this.textareaRef.current){
            this.setState({...this.state, isFocused: false});
        } else if(e.target === this.textareaRef.current){
            this.setState({...this.state, isFocused: true});
            this.textareaRef.current.focus();
        }
    }

    makeFocus(){
        if(!this.state.isFocused){
            this.setState({...this.state, isFocused: true});
        }
    }

    componentDidMount(){
        window.addEventListener(clickAction(), this.removeFocus);
    }

    componentWillUnmount() {
        window.removeEventListener(clickAction(), this.removeFocus);
    }

    render(){
        const {title, name, placeholder, cl} = this.props;
        const {value, isFocused} = this.state;
        return (
            <label htmlFor={name}>
                <div className="textarea__title small">{title}</div>
                <div className={classNames("textarea__wrapper", {'textarea__wrapper_active': isFocused})}>
                    <textarea onFocus={() => this.setState({...this.state, isFocused: true})}
                        className={classNames("textarea", {[cl]: cl})} name={name} value={value}
                        placeholder={placeholder} id={name}
                        onKeyDown={this.makeFocus}
                        onChange={(e) => this.setState({...this.state, value: e.target.value})}
                        ref={this.textareaRef}
                    ></textarea>
                </div>
            </label>
        );
    }
}

export default Textarea;