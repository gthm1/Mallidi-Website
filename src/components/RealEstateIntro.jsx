import './RealEstateIntro.css';
import HomeContentBlock from './HomeContentBlock';
import Image1 from '../assets/Home_RealEstate_1.jpeg';
import Image2 from '../assets/Home_RealEstate_2.jpeg';

function RealEstateIntro (){
    return(
        <>
            <div className='realestateIntro'>
                <h3 className='realestateIntro-heading'>Real Estate</h3>
                <div className='realestateIntro-contentBlocks'>
                    <HomeContentBlock 
                        image= {Image1}
                        heading='Lands for Sale'
                        para='Discover the perfect plot to build your dream home. Our available land options are located in thriving communities, ready for your custom construction.'/>

                    <HomeContentBlock 
                        image= {Image2}
                        heading='Homes for Sale'
                        para='Discover our selection of meticulously selected, pre-owned homes, offering great value, modern amenities, and move-in readiness for comfortable living.'/>
                    
                </div>
            </div>
        </>
    );
};

export default RealEstateIntro;