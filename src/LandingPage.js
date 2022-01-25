import React from 'react';
import Card from './Components/Card';
import Footer from './Components/Footer';
import ImageScroll from './Components/ImageScroll';
import ProfileCard from './Components/ProfileCard';

const LandingPage = () => {
    return (
        <div className="main_container">

            {/* header section */}
            <div className="header_container">
                <div className="header">
                    <div className="title_container">
                        <h1>Draft to Sign,</h1>
                        <h1> Everything Online</h1>
                        <p>Create your agreements online and share them through secured link.</p>
                        <a href='/'> <button className="get_started">GET STARTED</button></a>
                    </div>
                    <div style={{width:400, padding:'1%'}}>
                        <iframe width="370" height="345" src="https://www.youtube.com/embed/NB3vhUl-BE8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        >
                        </iframe>
                    </div>
                </div>
                <Card />
            </div>

            {/* middle section */}
            <div className="middle_container">
                <div className="middle_header">
                    <div className="middle_title_container">
                        <h1>DigiAgreement + the </h1>
                        <h1>tools you love</h1>
                        <p>Say goodbye to manual data entry. Integrate with
                            the tools you depend on so your team can get
                            proposals, contracts and quotes out the door fast.</p>
                        <p>See all integrations</p>
                    </div>
                    <ImageScroll />
                </div>
            </div>

            {/* bottom section */}
            <div className="bottom_container">
                <h1 style={{textAlign:'center'}}>Winning team choose DigiAgreement</h1>
                <ProfileCard />
                <a href="/"><p style={{ marginTop: '20px' }}>Read all customer stories</p></a>
            </div>

            {/* footer section */}
            <Footer />
        </div>
    )
}

export default LandingPage;