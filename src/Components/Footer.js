import React from "react";
import './Styles/footer.css';

const Footer = () => {
    return (
        <div className="footer_container" >
            <div className="footer_item">
                <h3>Product</h3>
                <p>Product tour</p>
            </div>

            <div className="footer_item">
                <h3>Integrations</h3>
                <p>HubSpot</p>
            </div>

            <div className="footer_item">
                <h3>Solutions</h3>
                <p>Proposals</p>
            </div>

            <div className="footer_item">
                <h3>Resources</h3>
                <p>Help center</p>
            </div>

            <div className="footer_item">
                <h3>Company</h3>
                <p>About us</p>
            </div>
        </div>
    )
}

export default Footer;