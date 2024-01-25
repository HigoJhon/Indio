import Header from "../components/Header";
import "../style/home.css";
import data from "../img/home/Images";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Home = () => {
  return (
    <main>
      <div className="div-header">
        <Header />
      </div>  
      <div className="div-home">
        <div className="div-part" >
          <div className="div-filter">
            <h2>Busca rapida</h2>
            <br />
            <div className="div-opt">
              <a href="#biscuit" className="span-biscuit"><samp>Biscuit</samp></a>
              <a href="#chaveiro" className="span-chaveiro"><span>Chaveiros</span></a>
              <a href="#bone" className="span-bone"><span>Bone</span></a>
              <a href="#contato" className="span-ima"><span>Imã</span></a>
              <a href="#roupa" className="span-roupa"><span>Roupa</span></a>
              <a href="#bolsa" className="span-bolsa"><span>Bolsa</span></a>
              <a href="#decoracao" className="span-decoracao"><span>Decoração</span></a>
            </div>
          </div>
          <div className="text-indio">
            <h1>Bem vindo a Casa do Indio</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dictum tellus, quis vulputate ipsum. Integer maximus tincidunt purus, sit amet ultricies neque luctus ac. Nam condimentum est at enim tempus volutpat.</p>
          </div>
        </div>
        <div className="image-indio">
          <Swiper
           modules={[Pagination, Scrollbar, A11y, Autoplay]}
           spaceBetween={50}
           slidesPerView={1}
           pagination={{ clickable: true }}
           scrollbar={{ draggable: true }}
           autoplay={{ delay: 2500 }}
           style={{ height: '100%' }}
          >
            {
              data.map((item) => (
                <SwiperSlide>
                  <img className="map-image" src={item.image} alt={item.id} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Home;
