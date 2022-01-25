import React from "react";
import Copper from './Images/copper.png';
import Hubspot from './Images/hubspot.png';
import DefaultProfile from './Images/defaultprofile.png';
const ProfileCard = () => {

    const profileData = [
        {
            'logo': Copper,
            'name': 'Jonathan Gerhard',
            'designation': 'Director of Information Systems',
            'profile': DefaultProfile
        },
        {
            'logo': Hubspot,
            'name': 'Michael Cardwell',
            'designation': 'Founder',
            'profile': DefaultProfile
        }]

    return (
        <div style={{padding:'15px'}} className="card_container">
            
            <div style={{border:'1px solid black',width:'14rem', padding:'10px'}} className='profile_card'>
                <div style={{ height:'80%', width:'13rem'}}>
                    <h1>CARR</h1>
                    <span style={{ fontSize: '13px', fontWeight:600}}>WORKPLACES</span>
                    <p style={{fontSize: '12px', marginTop:''}}>
                        "DigiAgreement have changed
                        our sales process entirely. We are
                        npw smarter, faster, and proud of
                        what we are able to send to our
                        prospects."
                    </p>
                </div>
                <div style={{textAlign:"right"}}>
                    <p style={{ fontSize: '13px', fontWeight:600, marginBottom:'2px'}}>Martha Stifter</p>
                    <p style={{marginTop: '0px', fontSize: '13px'}}>VP of Sales and Operations</p>
                </div>
            </div>

            {
                profileData.map((element) => {
                    return (
                        <div style={{ backgroundImage: 'url(' + element.profile + ')' }} className="profile_card">
                            <img width='70px' src={element.logo} />
                            <div className="profile_description">
                                <p>{element.name}</p>
                                <p style={{ marginTop: '6px', fontSize: '13px' }}>{element.designation}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProfileCard;