import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#f5f5f5] relative">
        <Navbar />
        <div className="absolute top-0 right-0 h-full w-[50%] bg-[url('https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg')] z-0"></div>
        <section className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 w-full order-2 md:order-1">
            <div className="flex items-center mb-4"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600 mb-6">
              Diam urna ornare leo facilisis suspendisse eu rutrum id augue
              cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar
              ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu
              aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis
              morbi a nunc diam mauris ut tortor.
            </p>

            <div className="container mx-auto px-8 py-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-start space-x-4">
                  <i className="fas fa-utensils text-3xl text-[#c99484]"></i>
                  <div>
                    <h3 className="text-lg font-bold text-[#c99484]">
                      FOOD CRITIC
                    </h3>
                    <p className="text-gray-600">
                      Diam nulla blandit urna tristique sit etiam amet
                      adipiscing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <i className="fas fa-bullhorn text-3xl text-[#c99484]"></i>
                  <div>
                    <h3 className="text-lg font-bold text-[#c99484]">
                      INFLUENCER
                    </h3>
                    <p className="text-gray-600">
                      Et volutpat lacinia enim, purus et rhoncus nibh egestas
                      habitant elit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <i className="fas fa-blog text-3xl text-[#c99484]"></i>
                  <div>
                    <h3 className="text-lg font-bold text-[#c99484]">
                      BLOGGER
                    </h3>
                    <p className="text-gray-600">
                      Venenatis egestas lectus interdum enim orci integer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className="py-12 text-center mt-14 mr-14 px-5">
              <div className="container mx-auto grid grid-cols-3 gap-4">
                <div>
                  <i className="fab fa-youtube text-3xl text-brown-light"></i>
                  <h3 className="text-2xl font-bold">1.2M+</h3>
                  <p className="text-gray-500 text-xs tracking-widest">
                    SUBSCRIBERS
                  </p>
                </div>
                <div>
                  <i className="fab fa-instagram text-3xl text-brown-light"></i>
                  <h3 className="text-2xl font-bold">1.8M+</h3>
                  <p className="text-gray-500 text-xs tracking-widest">
                    FOLLOWERS
                  </p>
                </div>
                <div>
                  <i className="fas fa-rss text-3xl text-brown-light"></i>
                  <h3 className="text-2xl font-bold">800K+</h3>
                  <p className="text-gray-500 text-xs tracking-widest">
                    READERS
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img-300x300.jpg"
              alt="dianna"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-left">
            <div className="text-3xl font-serif text-[#c99484] mb-4">“</div>
            <p className="text-2xl text-gray-700 font-semibold leading-relaxed mb-4">
              Sem nibh tristique ut laoreet amet tortor eu urna, ante urna
              aliquam tellus suscipit turpis turpis volutpat sed malesuada cras
              amet, donec eget molestie ipsum semper nunc aenean sagittis
              consequat.
            </p>

            <div className="mt-8">
              <img
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png"
                alt="Signature"
                className="mb-2"
              />
              <p className="text-gray-500 text-lg font-bold">DIANNA ADAMS</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 bg-[#f5f5f5]  text-center mx-auto px-2">
        <h4 className="text-gray-600 uppercase mb-4">As Featured In</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg"
            alt="Logo 1"
          />
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg"
            alt="Logo 2"
          />
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg"
            alt="Logo 3"
          />
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg"
            alt="Logo 4"
          />
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg"
            alt="Logo 5"
            className="mx-auto col-span-2 sm:col-span-1"
          />
        </div>
      </section>

      <div className="hover:bg-blue-700 hover:text-white st-customize-btn-item fixed right-0 bottom-[48%] flex items-center bg-white p-4 text-gray-800 cursor-pointer shadow-lg z-50 group">
        <span className="flex items-center gap-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.25C3.2725 0.25 0.25 3.2725 0.25 7C0.25 10.7275 3.2725 13.75 7 13.75C7.6225 13.75 8.125 13.2475 8.125 12.625C8.125 12.3325 8.0125 12.07 7.8325 11.8675C7.66 11.6725 7.5475 11.41 7.5475 11.125C7.5475 10.5025 8.05 10 8.6725 10H10C12.07 10 13.75 8.32 13.75 6.25C13.75 2.935 10.7275 0.25 7 0.25ZM2.875 7C2.2525 7 1.75 6.4975 1.75 5.875C1.75 5.2525 2.2525 4.75 2.875 4.75C3.4975 4.75 4 5.2525 4 5.875C4 6.4975 3.4975 7 2.875 7ZM5.125 4C4.5025 4 4 3.4975 4 2.875C4 2.2525 4.5025 1.75 5.125 1.75C5.7475 1.75 6.25 2.2525 6.25 2.875C6.25 3.4975 5.7475 4 5.125 4ZM8.875 4C8.2525 4 7.75 3.4975 7.75 2.875C7.75 2.2525 8.2525 1.75 8.875 1.75C9.4975 1.75 10 2.2525 10 2.875C10 3.4975 9.4975 4 8.875 4ZM11.125 7C10.5025 7 10 6.4975 10 5.875C10 5.2525 10.5025 4.75 11.125 4.75C11.7475 4.75 12.25 5.2525 12.25 5.875C12.25 6.4975 11.7475 7 11.125 7Z"
              className="fill-current text-blue-600 group-hover:text-white "
            ></path>
          </svg>
          <span className="text-[15px] font-medium tracking-normal">
            Customize
          </span>
        </span>
      </div>

      <div className="container mx-auto px-8 py-16">
        <div className="relative bg-black">
          <img
            src="https://media.houseandgarden.co.uk/photos/61893d8630743c94d4ce9ae3/16:9/w_2751,h_1547,c_limit/hgberdoulatone4222-production_digital075x.jpg"
            alt="Dianna family"
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0 flex items-end md:items-center text-white p-8 bg-gradient-to-t from-black via-transparent">
            <div>
              <div className="flex items-center mb-4">
                <button className="bg-white rounded-full p-4 mr-4">
                  <i className="fas fa-play text-black text-lg"></i>
                </button>
                <h2 className="text-3xl font-bold">Dianna Adam's Family</h2>
              </div>
              <p className="text-lg">
                Est, cras aliquet nunc, habitant velit ac, et sit tincidunt amet
                mi nulla pellentesque dignissim mattis tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#c99484] text-white py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-6xl font-bold mb-6">
            Invite me to your restaurant.
            <br />
            Get exposure of millions food lovers.
          </h1>
          <p className="text-sm md:text-base mb-8">
            Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing
            integer amet eget blandit phasellus est natoque blandit facilisi
            eleifend.
          </p>
          <button className="border-2 py-2 px-8 text-[#c99484] bg-white transition duration-300 font-bold">
            LET'S TALK
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
