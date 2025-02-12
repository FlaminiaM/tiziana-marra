import './Services.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import services from '../../../data/services.json';
import ServiceCard from '../../molecules/serviceCard/serviceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';


function Services() {
    console.log("services", services)
    return (
        <div className='services'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1.1}
                breakpoints={{
                    600: {
                      slidesPerView: 2.1,
                    },
                    992:{
                        slidesPerView: 6,
                    }
                  }}
                pagination={{ clickable: true }}
                navigation={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {services.map((service, i) => {
                    return (<SwiperSlide key={i} ><ServiceCard imageUrl={service.imageUrl} cardTitle={service.title} cardText={service.text}/></SwiperSlide>)
                })}
            </Swiper>
        </div>
    )

}

export default Services;