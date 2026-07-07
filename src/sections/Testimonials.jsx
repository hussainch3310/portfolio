import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

import SectionWrapper, { SectionTitle, fadeIn } from '../components/SectionWrapper';
import { TESTIMONIALS } from '../data/constants';

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-[#0B1120]">
      <SectionTitle 
        title="Client Testimonials" 
        subtitle="What people say" 
      />

      <motion.div 
        variants={fadeIn('up', 'tween', 0.2, 0.8)}
        className="max-w-4xl mx-auto"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="glass-card bg-[#020617] p-8 md:p-12 rounded-3xl text-center relative mx-4 mt-8">
                {/* Decorative Quote Icon */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl border-4 border-[#0B1120] shadow-lg">
                  <FaQuoteLeft />
                </div>
                
                <p className="text-lg md:text-xl font-inter text-text-body italic mb-8 mt-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full mb-4 overflow-hidden">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=random`} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-poppins font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm font-inter text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </SectionWrapper>
  );
};

export default Testimonials;
