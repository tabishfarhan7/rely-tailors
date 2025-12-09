import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mensuitImage, blazerImage, kurtaImage, poloImage, indowesternImage, shirt, wedding, formal, linen, cashmere, nehru, linensuit, shirts, polot, insta1, insta2, insta3, insta4, rely, tabish1 } from '../assets/index';
import weddingVideo from '../assets/weddingVideo.mp4';
// Import the new images from the assets folder
import kurtiImage from '../assets/kurti.jpeg';
import lehngaImage from '../assets/lehnga.jpeg';
import sareeImage from '../assets/saree.jpeg';
import dupattaImage from '../assets/dupatta.jpeg'; // Make sure the file extension matches exactly (.jpg vs .jpeg)
import suitImage from '../assets/suit.jpeg';
import suit from '../assets/1.jpeg';
import kurti from '../assets/2.jpeg';
import lehnga from '../assets/3.jpeg';
import banarasi from '../assets/banarasi.jpeg';
import desi from '../assets/desi.jpeg';
import sareee from '../assets/sareee.jpeg';
import lehngaaa from '../assets/lehngaaa.jpeg';
import kurtii from '../assets/kurtii.jpeg';
import home from '../assets/home.jpeg';
const categories = [
  {
    _id: '1',
    name: 'Kurti',
    image: home,
    description: 'Chic, comfortable styles designed for your everyday elegance.',
  },
  {
    _id: '2',
    name: 'Lehnga',
    image: lehngaImage,
    description: 'Regal silhouettes and intricate embroidery for your grandest moments.',
  },
  {
    _id: '3',
    name: 'Saree',
    image: sareeImage,
    description: 'Six yards of timeless grace blending heritage with modern style.',
  },
  {
    _id: '4',
    name: 'Dupatta',
    image: dupattaImage,
    description: 'Exquisite drapes to add a luxurious finish to any ensemble.',
  },
  {
    _id: '5',
    name: 'Suit',
    image: suitImage,
    description: 'Beautifully tailored suits that perfectly balance tradition and trend.',
  },
];

const gridItems = [
  {
    _id: '1',
    title: 'Lehnga',
    image: suit,
    link: '/products/category/Lehengas',
  },
  {
    _id: '2',
    title: 'Saree',
    image: kurti,
    link: '/products/category/Sarees',
  },
  {
    _id: '3',
    title: 'Kurti',
    image: lehnga,
    link: '/products/category/Kurtis',
  }
];

const newArrivals = [
  {
    _id: '68b15e83966360f5b90c2936',
    name: 'Royal Velvet Lehenga',
    price: '8500.00',
    image: lehngaaa
  },
  {
    _id: '68b17de7843fba334ca746db',
    name: 'Banarasi Silk Saree',
    price: '4500.00',
    image: banarasi
  },
  {
    _id: '68b17e15843fba334ca74730',
    name: 'Chikankari Kurti Set',
    price: '1800.00',
    image: kurtii
  },
  {
    _id: '68b17e5d843fba334ca74778',
    name: 'Embroidered Anarkali',
    price: '6200.00',
    image: sareee
  },
  {
    _id: '68b17e62843fba334ca747be',
    name: 'Phulkari Heavy Dupatta',
    price: '950.00',
    image: dupattaImage
  },
  {
    _id: '68b17e65843fba334ca74804',
    name: 'Floral Organza Saree',
    price: '4500.00',
    image: desi // Reusing sareeImage for variation
  },
];
const testimonials = [
  {
    quote: "The velvet Lehenga I bought for my sister's wedding was stunning. The embroidery detailing is unmatched!",
    author: "Ayesha Khan"
  },
  {
    quote: "I've never worn a Saree that drapes so effortlessly. The silk quality is pure luxury.",
    author: "Priya Sharma"
  },
  {
    quote: "Finally found a brand that understands ethnic chic. My Anarkali suit fits like a dream.",
    author: "Zara Malik"
  },
  {
    quote: "The bridal collection at R Rivaaz is breathtaking. My wedding outfit was everything I imagined and more.",
    author: "Sneha Reddy"
  },
  {
    quote: "Ordered a casual Kurti set for office wear. It's so comfortable yet stylish enough for evening outings.",
    author: "Fatima Siddiqui"
  },
  {
    quote: "The Phulkari Dupatta added such a vibrant touch to my plain suit. Everyone asked me where I got it!",
    author: "Simran Kaur"
  },
  {
    quote: "Customer service helped me pick the right size, and the alteration was spot on. Highly recommend!",
    author: "Riya Verma"
  },
  {
    quote: "Beautiful craftsmanship. The mirror work on the choli was exquisite and very neat.",
    author: "Ananya Gupta"
  },
  {
    quote: "Lightweight, breezy, and elegant. The organza Saree is perfect for summer day weddings.",
    author: "Meera Nair"
  },
  {
    quote: "I was worried about ordering ethnic wear online, but the fit was perfect. R Rivaaz is now my go-to.",
    author: "Sana Sheikh"
  },
  {
    quote: "The fusion suit set is a head-turner! I love how they blend tradition with modern cuts.",
    author: "Kavita Joshi"
  },
  {
    quote: "From packaging to the fabric feel, everything screams premium. Truly a royal experience.",
    author: "Zainab Ali"
  }
];

const instagramPosts = [
  {
    _id: '1',
    image: insta1
  },
  {
    _id: '2',
    image: insta2
  },
  {
    _id: '3',
    image: insta3
  },
  {
    _id: '4',
    image: insta4
  },
  {
    _id: '5',
    image: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?q=80&w=1887&auto=format&fit=crop'
  },
  {
    _id: '6',
    image: tabish1
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (

    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-semibold tracking-widest text-black mb-8">
          WE LOVE GOOD COMPLIMENTS
        </h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <p className="text-2xl md:text-3xl text-slate-600 italic leading-relaxed mb-6">
                “{item.quote}”
              </p>
              <p className="text-sm font-medium text-slate-500 uppercase">
                {item.author}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const BackgroundCubes = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <ul className="circles">
      <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
    </ul>
  </div>
);

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const RulerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" /></svg>;
const ScissorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a1 1 0 01-1.414 0L2 12m12.121-5.879L19 19" /></svg>;
const FabricIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-black-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M10 4l-2 1m2-1l-2-1m2 1v2.5M7 14l-2 1m2-1l-2-1m2 1v2.5m10 0l2-1m-2 1l2 1m-2-1v-2.5m-10 0l-2 1m-2-1l-2-1m2 1v-2.5" /></svg>;

const HomePage = () => {
  const categoryScrollRef = useRef(null);
  const arrivalsScrollRef = useRef(null);
  const [isCategoryPaused, setCategoryPaused] = useState(false);
  const [isArrivalsPaused, setArrivalsPaused] = useState(false);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isCategoryPaused && categoryScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          categoryScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          categoryScrollRef.current.scrollBy({ left: 320 + 48, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, [isCategoryPaused]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isArrivalsPaused && arrivalsScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = arrivalsScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          arrivalsScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          arrivalsScrollRef.current.scrollBy({ left: 320 + 32, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(scrollInterval);
  }, [isArrivalsPaused]);

  return (
    <div className="HomePageWrapper  bg-[#f2f2f2] text-slate-800 font-montserrat overflow-x-hidden">
      {/* Hero Section */}
      <div className="container mx-auto text-center pt-20 md:pt-28 pb-12 px-4" data-aos="fade-up">
        <h1 className="font-marcellus text-5xl sm:text-6xl md:text-7xl mb-4 text-slate-900">RRiwaaz</h1>
        <p className="max-w-xl sm:max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
         Discover our exclusive collection of handpicked Sarees, designer Lehengas, and intricately embroidered Suits. Whether it's a casual Kurti for the day or a heavy Dupatta for the evening, find your perfect fit at R Rivaaz.
        </p>
      </div>

      {/* Category Image Carousel */}
      <div className="relative mb-24" data-aos="fade-up">
        <button onClick={() => handleScroll(categoryScrollRef, 'left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white rounded-full p-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div
          ref={categoryScrollRef}
          className="flex space-x-12 overflow-x-auto pb-4 horizontal-scrollbar px-4"
          onMouseEnter={() => setCategoryPaused(true)}
          onMouseLeave={() => setCategoryPaused(false)}
        >
          {categories.map((category) => (
            <div key={category._id} className="group flex-shrink-0 w-80 text-left">
              <Link to={`/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[32rem] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h3 className="font-marcellus text-2xl mt-4 text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-500 mt-2 h-10">{category.description}</p>
                <div className="inline-flex items-center mt-4 text-xs font-bold tracking-widest uppercase text-slate-700 group-hover:text-amber-600 transition-colors">
                  <span>Discover Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button onClick={() => handleScroll(categoryScrollRef, 'right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white rounded-full p-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

     {/* Features Section */}
      <div className="container mx-auto px-4 py-16 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <CalendarIcon />
            <h3 className="font-marcellus text-2xl">On-Time Delivery</h3>
            <p className="text-sm text-black text-500 mt-2">We ensure your outfit reaches you promptly before your special occasion.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <RulerIcon />
            <h3 className="font-marcellus text-2xl">Custom Stitching</h3>
            <p className="text-sm text-black text-500 mt-2">Get your Lehengas and Suits stitched to your exact measurements.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <ScissorIcon />
            <h3 className="font-marcellus text-2xl">Handcrafted Detail</h3>
            <p className="text-sm text-black text-500 mt-2">Intricate embroidery and flawless finishing by master artisans.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <FabricIcon />
            <h3 className="font-marcellus text-2xl">Premium Fabrics</h3>
            <p className="text-sm text-black text-500 mt-2">Curated selection of the finest silks, georgettes, and velvets.</p>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridItems.map(item => (
            <div key={item._id} className="group relative overflow-hidden">
              <Link to={item.link}>
                <img src={item.image} alt={item.title} className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-start p-6">
                  <h3 className="text-white font-marcellus text-2xl">{item.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="bg-white py-24" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-marcellus text-3xl sm:text-4xl">Our New Arrivals</h2>
            <Link to="/products" className="text-sm sm:text-base font-bold tracking-widest uppercase border-b-2 border-slate-400 hover:border-amber-600 transition-colors ml-4">
              View All Products
            </Link>
          </div>
          <div className="relative">
            <button onClick={() => handleScroll(arrivalsScrollRef, 'left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white rounded-full p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div
              ref={arrivalsScrollRef}
              className="flex space-x-8 overflow-x-auto pb-4 horizontal-scrollbar px-4"
              onMouseEnter={() => setArrivalsPaused(true)}
              onMouseLeave={() => setArrivalsPaused(false)}
            >
              {newArrivals.map(product => (
                <div key={product._id} className="group flex-shrink-0 w-80 text-center">
                  <Link to={`/products/${product._id}`}>
                    <div className="overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-marcellus text-xl mt-4">{product.name}</h3>
                    <p className="text-slate-500">₹{product.price}</p>
                  </Link>
                </div>
              ))}
            </div>
            <button onClick={() => handleScroll(arrivalsScrollRef, 'right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white rounded-full p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Wedding Collection Section */}
      <div className="bg-white py-12 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <BackgroundCubes />
        </div>
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 md:p-12 mx-4 sm:mx-8 md:mx-10 lg:mx-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <div className="relative aspect-video md:aspect-auto md:h-[400px] lg:h-[500px]">
                <video
                  src={weddingVideo}
                  alt="Groom getting ready for his wedding"
                  className="w-full h-full object-cover rounded-sm"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl text-black text-left mb-4">
                The Wedding <br className="hidden sm:block" /> Collection
              </h2>
              <p className="text-black text-base sm:text-lg leading-relaxed mb-6">
                For the most important day of your life, settle for nothing less than absolute perfection.
                Our wedding collection brings together timeless elegance and modern sophistication, offering
                bespoke suits and tuxedos designed to make you the center of attention. From handpicked fabrics
                to precision tailoring, every piece is crafted with care, ensuring a flawless fit that reflects
                your personal style.
              </p>
              <Link
                to="/products/category/wedding"
                className="inline-block bg-black text-white hover:bg-white hover:text-black border border-transparent hover:border-black font-light py-3 px-8 rounded-sm transition-colors duration-300 text-sm uppercase tracking-widest"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Instagram & Newsletter Section */}
      <div className="bg-white py-24 text-center" data-aos="fade-up">

        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="text-6xl sm:text-7xl md:text-9xl font-black text-slate-100 opacity-50 uppercase">Newsletter</span>
          </div>
          <div className="relative z-10">
            <h2 className="font-marcellus text-3xl sm:text-4xl">Sign Up For Our Newsletter</h2>
            <form className="max-w-md mx-auto mt-8 flex">
              <input type="email" placeholder="Your Email Address" className="w-full p-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <button
                type="submit"
                className="bg-slate-900 text-white font-bold p-3 uppercase tracking-widest hover:bg-slate-800 transition-colors w-40"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-16">
          {instagramPosts.map(post => (
            <a href="#" key={post._id} className="group overflow-hidden">
              <img src={post.image} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </a>
          ))}
        </div>
        <a href="https://www.instagram.com/rriwaaz?igsh=MW42NThrcmQ5bDRocw==" className="inline-block mt-12 bg-slate-900 text-white font-bold py-3 px-8 rounded-sm hover:bg-slate-800 transition-colors duration-300 text-sm uppercase tracking-widest">
          Follow us on Instagram
        </a>
      </div>
    </div>
  );
};

export default HomePage;

