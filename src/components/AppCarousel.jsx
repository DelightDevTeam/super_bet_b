import Carousel from 'react-bootstrap/Carousel';
 
function AppCarousel() {
  const carousels=[
    'https://shwedinker777.online/assets/img/banners/1.png',
    'https://shwedinker777.online/assets/img/banners/2.png',
    'https://shwedinker777.online/assets/img/banners/3.png'
  ]
  return (
    <Carousel>
     {carousels.map((item,index)=>{
      return  <Carousel.Item key={index}>
      <img src={item} className='carouselImg' />
     </Carousel.Item>
     })}
       
    </Carousel>
  );
}

export default AppCarousel;