import Header from '../Header/Header.jsx';
import '@sass/index.sass'
import withMainLayout from "@components/Main/withMainLayout.jsx";
import {StrictMode, useEffect, useRef, useState} from 'react';

function withAppLayout(BaseComponent) {
    const Page = withMainLayout(BaseComponent);

    return props => {
        return (
            <StrictMode>
                <Header />
                <Page {...props} />
            </StrictMode>
        );
    }
}

export default withAppLayout;
