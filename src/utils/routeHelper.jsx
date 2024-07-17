import withAppLayout from "@components/App/withAppLayout.jsx";
import {Component} from 'react';
import withAuthLayout from "@components/Auth/withAuthLayout.jsx";
import Login from "@pages/Login/Login.jsx";

/**
 *
 * @param {Component} BaseComponent
 * @param {Object|Boolean} data
 * @returns {Element}
 */
export const preparePage = (BaseComponent, data=false) => {
    const Page = withAppLayout(BaseComponent);
    if(data){
        return <Page data={data} />;
    } else {
        return <Page />;
    }
}

export const prepareAuthPage = (BaseComponent) => {
    const Page = withAuthLayout(BaseComponent);
    return <Page />;
}

