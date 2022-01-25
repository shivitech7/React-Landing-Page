import React from "react";
import Copper from './Images/copper.png';
import Hubspot from './Images/hubspot.png';
import Pipedrive from './Images/pipedrive.png';
import Salesforce from './Images/salesforce.png';
import Zapier from './Images/zapier.png';
import Zoho from './Images/zoho.png';
import './Styles/imageScroll.css';

const ImageScroll = () => {

    const logo = [
        { 'logo': Copper },
        { 'logo': Hubspot },
        { 'logo': Pipedrive },
        { 'logo': Salesforce },
        { 'logo': Zapier },
        { 'logo': Zoho },
        { 'logo': Salesforce },
        { 'logo': Salesforce },
        { 'logo': Salesforce },
        { 'logo': Salesforce },
        { 'logo': Salesforce },
        { 'logo': Salesforce },
        { 'logo': Salesforce },
        { 'logo': Salesforce },
    ]
    return (
        <div className="logo_container">
            {
                logo.map((element, i) => {
                    console.log(element.logo)
                    return (
                        <div className="logo">
                            <img key={i} height='80px' src={element.logo} alt="logo" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageScroll;