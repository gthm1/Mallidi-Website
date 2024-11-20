import './SpeakToUs.css';
import ButtonComponent from './ButtonComponentV1';

function SpeakToUs () {
    return (
        <>
            <div className='speak-to-us'>   
                <div className='the-text'>
                    <h4>Ready to speak to us?</h4>
                </div>

                <div className='the-button'>
                    <ButtonComponent width="300px" text="Book a discovery call" link="https://example.com" />
                </div> 
            </div>
            
        </>
    );
};

export default SpeakToUs;