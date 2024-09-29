import { useState } from "react";
import Card from "./components/Card";
import VideoCard from "./components/VideoCard";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5] relative">
        <div className="absolute top-0 right-0 h-full w-1/4 bg-brown-light z-0"></div>

        <nav className="flex justify-between items-center py-4 px-8 relative z-10">
          <div className="flex items-center space-x-10">
            <div className="text-3xl font-bold" style={{ color: "#be7c6b" }}>
              DA
            </div>

            <ul className="hidden md:flex space-x-6 text-lg font-bold">
              <li className="text-brown-light cursor-pointer">Home</li>
              <li className="hover:text-gray-600 cursor-pointer">About</li>
              <li className="hover:text-gray-600 cursor-pointer">Reviews</li>
              <li className="hover:text-gray-600 cursor-pointer">Videos</li>
              <li className="hover:text-gray-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <div className="text-white cursor-pointer">
              <i className="fab fa-youtube bg-transparent text-2xl"></i>
            </div>
            <div className="text-white cursor-pointer">
              <i className="fab fa-instagram bg-transparent text-2xl"></i>
            </div>
            <div className="text-white cursor-pointer">
              <i className="fab fa-facebook bg-transparent text-2xl"></i>
            </div>

            <button className="border border-white text-white py-2 px-6 hover:bg-[#be7c68] hover:text-white transition duration-300 font-bold">
              LET’S TALK
            </button>
          </div>

          <button
            className="text-white md:hidden bg-black bg-opacity-20 p-2 rounded-full"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-center items-center">
            <ul className="flex flex-col space-y-8 text-lg font-bold text-gray-800">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Reviews</li>
              <li className="cursor-pointer">Videos</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-800 text-2xl"
            >
              &times;
            </button>
          </div>
        )}

        <section className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 w-full relative order-1 md:order-2 mb-8 md:mb-0">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
              alt="Dianna Adams"
              className="w-[80%] md:w-[70%] mx-auto"
            />
          </div>

          <div className="md:w-1/2 w-full order-2 md:order-1">
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-16 bg-brown-light mr-4"></div>
              <p className="text-brown-light uppercase tracking-widest">
                Welcome
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              I’m Dianna Adams
            </h1>
            <h2 className="text-2xl mb-4 font-bold">
              Food Critic / Influencer / Blogger
            </h2>
            <p className="text-gray-600 mb-6">
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra nunc at adipiscing sit morbi aliquet mauris porttitor
              nisi, senectus pharetra, ac porttitor orci.
            </p>
            <button className="bg-transparent border border-brown-light text-brown-light py-2 px-6 hover:bg-brown-light hover:text-white transition duration-300">
              Join Insider
            </button>

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

      <section className="container mx-auto px-8 py-16 bg-[#f5f5f5] ">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Latest Reviews</h2>
          <button className="text-brown-light border border-brown-light py-2 px-4 hover:bg-brown-light hover:text-white transition duration-300">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Card
            image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
            title="Grilled Flank Steak with Chimichurri"
            description="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."
            linkText="Read More"
          />
          <Card
            image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
            title="Mushroom Penne with Walnut Pesto"
            description="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus."
            linkText="Read More"
          />
          <Card
            image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
            title="Garlic Butter White Wine Shrimp Linguine"
            description="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat."
            linkText="Read More"
          />
        </div>
      </section>

      <div className="min-h-screen bg-[#f3efee]">
        <section className="container mx-auto px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Best in Class Restaurant</h2>
          <p className="text-gray-600 mb-12">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
            nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
            pharetra ac porttitor orci.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg"
              title="Bern's Steak House"
              description="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."
              linkText="Read More"
            />
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg"
              title="Eewak Korean Restaurant"
              description="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
              linkText="Read More"
            />
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg"
              title="The Ramban Vegan House"
              description="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
              linkText="Read More"
            />
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg"
              title="Maniest Bake & Cake"
              description="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
              linkText="Read More"
            />
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg"
              title="Crush Los Angeles"
              description="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
              linkText="Read More"
            />
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg"
              title="The Mike Winery"
              description="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
              linkText="Read More"
            />
          </div>
        </section>
      </div>
      <div className="bg-[#f5f5f5] ">
        <section
          className="container mx-auto px-4 sm:px-8 py-12 flex flex-col md:flex-row items-center bg-white relative"
          style={{ maxWidth: "90vw", borderColor: "#e5e7eb" }}
        >
          <div className="md:w-1/2 relative z-10">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
              alt="Join Mailing List"
              className="w-full h-auto object-cover -mt-8"
              style={{ position: "relative", top: "-50px" }}
            />
          </div>
          <div className="flex flex-col w-full md:w-[40vw] justify-end p-6 z-20 ">
            <p className="text-4xl sm:text-5xl my-4 font-Fraunces font-bold max-md:text-3xl max-sm:text-xl max-sm:my-2 text-[#131516]">
              Join Mailing List
            </p>
            <p className="my-4 text-sm sm:text-base max-md:text-xs max-sm:mb-6 font-Montserrat">
              Sign up and get all the latest, ad-free reviews, recipes, and news
              sent to your inbox.
            </p>
            <div className="flex items-center flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered bg-gray-100 w-full font-Montserrat rounded-none max-sm:w-full border-2 border-gray-300 p-1"
              />
              <button className="border-2 font-Montserrat text-xs sm:text-base m-3 px-[5%] py-3 font-bold border-[#BE7C68] text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white transition duration-150 ease-out hover:ease-in tracking-widest max-md:py-4 max-sm:w-full">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="absolute inset-0 border-4 border-gray-300 z-0"></div>
        </section>
      </div>

      <section className="container mx-auto px-4 sm:px-8 py-16 bg-[#f5f5f5] ">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Latest Videos</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg"
                alt="Featured Video"
                className="w-full h-auto object-cover "
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <button className="bg-white p-4 rounded-full shadow-lg">
                  <i className="fas fa-play text-brown-light text-2xl"></i>
                </button>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-6">
              Dianna Adams visits the Sooto Restaurant | Uncovered Miami
            </h3>
            <p className="text-gray-600 mt-4">
              A consectetur eget ultrices nec velit purus quam dignissim purus
              gravida aliquam mattis ultrices eget ultricies tincidunt et erat
              enim vitae sollicitudin tellus placerat.
            </p>
          </div>

          <div>
            <VideoCard
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg"
              title="Family Dinner - Latea pulvinar scelerisque diam tempus facilisi"
              description="Enim imperdiet fames nisl, purus et diam aliquet"
            />
            <VideoCard
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg"
              title="Lobortis turpis turpis vehicula laoreet egestas enim ornare"
              description="Enim imperdiet fames nisl, purus et diam aliquet"
            />
            <VideoCard
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg"
              title="Tempus quis ac viverra condimentum sit nulla viverra"
              description="Enim imperdiet fames nisl, purus et diam aliquet"
            />
            <VideoCard
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg"
              title="Quis mauris egestas enim urna dictum"
              description="Enim imperdiet fames nisl, purus et diam aliquet"
            />

            <button className="border border-brown-light text-brown-light py-2 px-6 mt-4 hover:bg-brown-light hover:text-white transition duration-300 w-full">
              View All Videos
            </button>
          </div>
        </div>
      </section>

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

      <footer className="bg-gray-50 py-8 px-4 sm:px-40">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600">
          <div className="mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-[#c99484]">DA</h2>
            <p className="text-sm">© 2024 Food Blogger & Influencer</p>
          </div>

          <ul className="flex space-x-6 text-sm mb-4 md:mb-0">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">About</li>
            <li className="hover:text-gray-800 cursor-pointer">Reviews</li>
            <li className="hover:text-gray-800 cursor-pointer">Videos</li>
            <li className="hover:text-gray-800 cursor-pointer">Contact</li>
          </ul>

          <div className="flex space-x-4 text-[#c99484] hover:text-[#000000]">
            <i className="fab fa-youtube cursor-pointer"></i>
            <i className="fab fa-instagram cursor-pointer"></i>
            <i className="fab fa-facebook cursor-pointer"></i>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-600">
            Powered by Food Blogger & Influencer
          </p>
        </div>
      </footer>
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
    </>
  );
}

export default App;
