import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
       <section className='max-w-screen-xl mx-auto mb-20'>
         <div className="carousel w-full h-[600px] ">
  <div id="slide1" className="carousel-item relative w-full ">
    <div className='absolute max-w-[460px] bg-gradient-to-r space-y-7 from-[#151515] h-full flex flex-col justify-center to-[rgba(21,21,21,0.00)]'>
        <h1 className='text-6xl font-bold ml-10 text-white'>Affordable Price For Car Servicing</h1>
        <p className='text-white text-lg ml-10'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-x-5 ml-10'>
            <button className='text-white text-lg py-4 px-5 bg-orange rounded-md'>Discover More</button>
            <button className='text-white text-lg py-4 px-5 bg-transparent border rounded-md'>Latest Project</button>
        </div>
    </div>
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-end transform  left-5 right-5 bottom-10 gap-x-6">
      <a href="#slide4" className="btn btn-circle hover:bg-orange">❮</a> 
      <a href="#slide2" className="btn btn-circle hover:bg-orange">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className='w-full' />
    <div className="absolute flex justify-end transform  left-5 right-5 bottom-10 gap-x-6">
      <a href="#slide1" className="btn btn-circle hover:bg-orange">❮</a> 
      <a href="#slide3" className="btn btn-circle hover:bg-orange">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-end transform  left-5 right-5 bottom-10 gap-x-6">
      <a href="#slide2" className="btn btn-circle hover:bg-orange">❮</a> 
      <a href="#slide4" className="btn btn-circle hover:bg-orange">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-end transform  left-5 right-5 bottom-10 gap-x-6">
      <a href="#slide3" className="btn btn-circle hover:bg-orange">❮</a> 
      <a href="#slide1" className="btn btn-circle hover:bg-orange">❯</a>
    </div>
  </div>
</div>
       </section>
    );
};

export default Banner;