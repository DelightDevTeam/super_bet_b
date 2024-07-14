import Carousel from 'react-bootstrap/Carousel';
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";
 
function AppCarousel() {
  const {data: banners} = useFetch(BASE_URL + '/banner');

  return (
    <Carousel>
     {banners && banners.map((item,index)=>{
      return  <Carousel.Item key={index}>
      <img src={item.img_url} className='carouselImg' />
     </Carousel.Item>
     })}
       
    </Carousel>
  );
}

export default AppCarousel;