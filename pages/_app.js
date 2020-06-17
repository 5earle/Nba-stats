import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import withRedux from "next-redux-wrapper";
import {Provider} from 'react-redux';

import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/Theme';
import Navbar from '../components/Navbar';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default function MyApp(props) {
    const { Component, pageProps } = props;
    //makeStore function that returns a new store for every request
    const makeStore = () => store;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider store={store}>
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <MuiThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Navbar/>
                <Component {...pageProps} />
            </MuiThemeProvider>
        </React.Fragment>
        </Provider>
    );
}

/*
 ctx is a getInitialProps parameter referring to Context
 */
MyApp.getInitialProps = async function({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
}
