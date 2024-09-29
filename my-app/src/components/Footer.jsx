const Footer = () => {
  return (
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
  );
};

export default Footer;
