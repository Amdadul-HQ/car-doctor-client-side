import About from '../../Component/HomePageComponent/About/About';
import Banner from '../../Component/HomePageComponent/Banner/Banner';
import ContractInfo from '../../Component/HomePageComponent/ContractInfo/ContractInfo';
import PopularProducts from '../../Component/HomePageComponent/PopularProducts/PopularProducts';
import Service from '../../Component/HomePageComponent/Service/Service';
import TeamSection from '../../Component/HomePageComponent/TeamSection/TeamSection';
import Testimonial from '../../Component/HomePageComponent/Testimonial/Testimonial';
import WhyChooseUs from '../../Component/HomePageComponent/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
        
            <Banner/>
            <About/>
            <Service/>
            <ContractInfo/>
            <PopularProducts/>
            <TeamSection/>
            <WhyChooseUs/>
            <Testimonial/>

        </>
    );
};

export default Home;