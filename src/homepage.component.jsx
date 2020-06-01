import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 classNAme='title'>HATS</h1>
                    <span classNAme='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 classNAme='title'>JACKETS</h1>
                    <span classNAme='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 classNAme='title'>SNEAKERS</h1>
                    <span classNAme='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 classNAme='title'>MEN</h1>
                    <span classNAme='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 classNAme='title'>WOMEN</h1>
                    <span classNAme='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;