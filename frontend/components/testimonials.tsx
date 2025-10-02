"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, StartupX",
    text: "The team delivered our app on time and exceeded expectations. We saw immediate growth.",
  },
  {
    name: "Michael Lee",
    role: "CTO, FinTech Co.",
    text: "Professional, communicative, and skilled. They helped us scale securely and reliably.",
  },
  {
    name: "Amelia Smith",
    role: "Founder, HealthTech",
    text: "Their design transformed our product. Clients love the new experience!",
  },
  {
    name: "Daniel Kim",
    role: "Product Manager, EduTech",
    text: "They understood our needs and created a platform that our users adore.",
  },
  {
    name: "Priya Singh",
    role: "Founder, SaaSify",
    text: "Our revenue doubled within months after launching the new system they built.",
  },
  {
    name: "James Carter",
    role: "COO, RetailPro",
    text: "Their team is reliable, fast, and highly professional. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg h-full flex flex-col justify-between">
                <p className="text-gray-700 italic mb-6">“{t.text}”</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

