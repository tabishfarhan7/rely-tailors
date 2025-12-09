import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing your R Rivaaz assets
// Ensure these match your actual file paths
import lehngaImage from '../assets/lehnga.jpeg';
import sareeImage from '../assets/saree.jpeg';
import kurtiImage from '../assets/kurti.jpeg'; 
import suitImage from '../assets/suit.jpeg';
import shadi from '../assets/shadi.jpg';
import shadi2 from '../assets/shadi2.jpg';

// Animated Background Component
const BackgroundCubes = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <ul className="circles">
      <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
    </ul>
  </div>
);

// Service Card Component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
    <div className="text-3xl mb-3 text-slate-700">{icon}</div>
    <h3 className="font-semibold text-lg mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 120,
    });
  }, []);

  return (
    <div className="HomePageWrapper bg-white font-montserrat text-slate-800 overflow-x-hidden">

      {/* --- Hero Section --- */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="200" className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={shadi}
                alt="Intricate Indian Bridal Wear"
                className="w-full h-90 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-4 rounded-lg shadow-lg">
                <span className="block text-2xl font-bold text-amber-500">5+</span>
                <span className="text-sm">Years of Heritage</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <h1 className="font-marcellus text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight">
              Weaving Tradition into <br /> <span className="text-amber-700">Timeless Elegance</span>
            </h1>
            <p className="text-slate-600 mt-6 leading-relaxed text-lg">
              At <strong>R Rivaaz</strong>, we believe every garment tells a story. 
              We blend the rich heritage of Indian craftsmanship with contemporary silhouettes 
              to create ensembles that celebrate the modern woman. From the royal drape of a Saree 
              to the intricate embroidery of a Lehenga, we craft art you can wear.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block text-xl">5000+</span>
                <span className="text-sm text-slate-600">Happy Customers</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block text-xl">100%</span>
                <span className="text-sm text-slate-600">Handcrafted Detail</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Our Values Section --- */}
      <div className="bg-slate-50 py-16 md:py-24 relative">
        <BackgroundCubes />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-marcellus text-3xl md:text-4xl text-slate-900 mb-4">Our Philosophy</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">Where age-old traditions meet modern grace.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Intricate Karigari</h3>
              <p className="text-slate-600 text-sm">Our master artisans spend hours perfecting every bead, thread, and sequin to ensure your outfit shines.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Authentic Fabrics</h3>
              <p className="text-slate-600 text-sm">We source the finest silks, georgettes, and organzas directly from weavers across the country.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="600">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">💃</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom Fitting</h3>
              <p className="text-slate-600 text-sm">Every body is unique. We ensure your Lehengas and Suits are tailored to fit your shape perfectly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Meet the Designers Section --- */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="zoom-in" data-aos-delay="300" className="flex justify-center order-2 md:order-1">
             {/* Using Suit/Kurti image here to show detailed work */}
            <div className="relative w-full max-w-md">
              <img
                src={shadi2}
                alt="Artisan working on embroidery"
                className="w-full h-90 object-cover rounded-lg shadow-md"
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-700 text-white p-3 rounded-lg shadow-lg">
                <span className="block text-sm">Master Craftsmanship</span>
                <span className="text-xs">Since 1988</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="500" className="order-1 md:order-2">
            <h2 className="font-marcellus text-3xl md:text-4xl text-slate-900 mb-6">
              Designed for the <br /> Royal in You
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At R Rivaaz, fashion is an emotion. Behind every collection is a dedicated team of designers 
              and kaarigars (artisans) who breathe life into fabric. We honor the legacy of Indian textiles 
              while innovating with cuts and colors that appeal to the contemporary woman.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Whether it's the heavy Zardosi work for a bride or a breezy Chikankari Kurti for a summer lunch, 
              precision is our promise. We don't just make clothes; we create heirlooms.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-slate-900 text-white font-semibold py-4 px-8 rounded-sm shadow-md hover:bg-slate-800 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Book a Styling Session
            </Link>
          </div>
        </div>
      </div>

      {/* --- Services Section --- */}
      <div className="bg-[#f9f9f9] py-16 md:py-24 relative">
        <BackgroundCubes />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-marcellus text-3xl md:text-4xl text-slate-900 mb-4">Our Collections & Services</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">From bridal trousseaus to everyday ethnic chic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon="👰"
              title="Bridal Couture"
              description="Exquisite Lehengas and heavy Suits designed to make your special day truly unforgettable."
            />
            <ServiceCard
              icon="👗"
              title="Custom Stitching"
              description="Get your dream outfit stitched to perfection. You choose the design; we bring it to life."
            />
            <ServiceCard
              icon="🧵"
              title="Hand Embroidery"
              description="Specializing in Zardosi, Phulkari, and Mirror work to add that royal touch to your garments."
            />
            <ServiceCard
              icon="🧣"
              title="Sarees & Drapes"
              description="A curated collection of Banarasi, Silk, and Designer Sarees for every occasion."
            />
            <ServiceCard
              icon="✂️"
              title="Alterations"
              description="Expert fitting adjustments to ensure your existing ethnic wear fits you like a glove."
            />
            <ServiceCard
              icon="🎁"
              title="Trousseau Packing"
              description="Elegant packaging services to present your wedding gifts and outfits with style."
            />
          </div>
        </div>
      </div>

      {/* --- Testimonials Section --- */}
      <div className="bg-slate-900 text-white py-16 md:py-24 relative">
        <BackgroundCubes />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-marcellus text-3xl md:text-4xl mb-4">Client Love</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">Stories from women who chose R Rivaaz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
              <p className="text-slate-300 italic mb-4 text-sm">"The velvet Lehenga I bought for my sister's wedding was stunning. The fitting was flawless right out of the box!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-700 rounded-full mr-3 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h4 className="font-semibold text-sm">Ayesha Khan</h4>
                  <p className="text-xs text-slate-400">Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
              <p className="text-slate-300 italic mb-4 text-sm">"Finally found a brand that understands ethnic chic. My office wear Kurtis are so comfortable and stylish."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-700 rounded-full mr-3 flex items-center justify-center text-white font-bold">P</div>
                <div>
                  <h4 className="font-semibold text-sm">Priya Sharma</h4>
                  <p className="text-xs text-slate-400">Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="600">
              <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
              <p className="text-slate-300 italic mb-4 text-sm">"I was skeptical about ordering a Saree online, but the silk quality is pure luxury. R Rivaaz is now my go-to."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-700 rounded-full mr-3 flex items-center justify-center text-white font-bold">Z</div>
                <div>
                  <h4 className="font-semibold text-sm">Zara Malik</h4>
                  <p className="text-xs text-slate-400">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="bg-amber-50 py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-marcellus text-3xl md:text-4xl text-slate-900 mb-4" data-aos="fade-up">Embrace the R Rivaaz Elegance</h2>
          <p className="max-w-3xl mx-auto text-slate-700 mb-8" data-aos="fade-up" data-aos-delay="200">
            Explore our latest collection or book a video consultation to get your outfit customized from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/products"
              className="inline-block bg-slate-900 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-800 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Shop Collection
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-slate-900 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;