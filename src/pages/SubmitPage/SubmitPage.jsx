import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar';
import { SubmitForm } from '../../components/SubmitForm/SubmitForm'
import './SubmitPage.css'

export const SubmitPage = () => {
    return (
        <div className='bodydiv'>
            <SubmitForm/>
            <Navbar/>
        </div>
    );
}