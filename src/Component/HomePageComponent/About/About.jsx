import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <section className='max-w-screen-xl mx-auto flex justify-evenly mb-20'>
            <div className='w-1/2'>
                    <div className='relative' >
                        <img className='w-[460px] rounded-xl h-[470px]' src={person} alt="" />
                        <img className='absolute -bottom-16 right-32 w-[327px] h-[332px] border-white rounded-lg border-8' src={parts} alt="" />
                    </div>
                </div>
                <div className='w-1/2 space-y-8'>
                    <p className='text-orange text-xl font-bold'>About Us</p>
                    <h1 className='text-5xl text-bigText font-bold w-96'>We are qualified & of experience in this field</h1>
                    <p className='text-smText text-base w-[490px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-smText text-base w-[490px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='text-white text-lg py-4 px-5 bg-orange rounded-md'>Get More Info</button>
                </div>
        </section>
    );
};

export default About;