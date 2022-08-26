import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

import styles from './styles.module.css'
import React, { Fragment } from 'react';

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <div className={styles.content_blog}>
                { children }
                <Footer />
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
