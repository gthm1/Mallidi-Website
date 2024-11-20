import './ConstructionIntro.css';
import HomeContentBlock from './HomeContentBlock';
import Image1 from '../assets/HomeDesigns.jpeg';
import Image2 from '../assets/KnockDown_Rebuild.jpeg';
import Image3 from '../assets/Custom_homes.jpeg';
import Image4 from '../assets/House_and_Land.jpeg';

function ConstructionIntro() {
    return(
        <>
            <div className='constructionIntro'>
                <h3 className='constructionIntro-heading'>Construction</h3>
                <div className='constructionIntro-content'>
                    <HomeContentBlock 
                            image= {Image1}
                            heading='Home Designs'
                            para='Discover our home designs that blend modern style and practicality, featuring open layouts and natural light. Customize your ideal double-storey or single-level retreat!'/>

                    <HomeContentBlock 
                            image= {Image2}
                            heading='KnockDown Rebuild'
                            para='Upgrade your property with a knockdown rebuild, replacing your old home with a modern, customized design that fits your lifestyle!'/>

                    <HomeContentBlock 
                        image= {Image3}
                        heading='Custom Designs'
                        para='Create your dream home with our custom designs, tailored to fit your style and needs. Personalize every detail for a perfect living space!'/>

                    <HomeContentBlock 
                        image= {Image4}
                        heading='House and Land'
                        para='Find the perfect combination with our house and land packages, offering ready-to-build homes on prime land for a seamless homebuying experience!'/>
 
                    
                </div>
            </div>
        </>
    );
};

export default ConstructionIntro;