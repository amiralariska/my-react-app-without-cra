import React, { useState } from 'react';
import { InfoIcon, PlusIcon } from '../assets/icons';
import './Banner.css'

export default function Banner() {
    const date = new Date("2022-11-30");
    const enddate = date.toLocaleDateString('en-US', {
        dateStyle: 'long'
    });
    const [hidebanner, setHideBanner] = useState(false)
    return (
        <>
            <div className={hidebanner ? 'banner remove' : 'banner'}>
                <div className='banner-content'>
                    <InfoIcon />
                    <div className='banner-text-content'>
                        <p className='banner-text'>My React App Without CRA will<br /> be updated at {enddate}</p>
                        <a className='github-repo' href='https://github.com/amiralariska/my-react-app-without-cra-clone' target='_blank' rel='noopener noreferrer'>Please check this github repo</a>
                    </div>
                </div>
                <button className='banner-close' onClick={() => setHideBanner(!hidebanner)}>
                    <PlusIcon />
                </button>
            </div>
        </>
    )
}