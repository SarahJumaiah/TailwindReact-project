import { Link } from 'react-router-dom';

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 relative z-10">
      <div className="flex items-center space-x-10">
        <div className="text-3xl font-bold" style={{ color: "#be7c6b" }}>
          DA
        </div>

        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          <li className="cursor-pointer">
            <Link to="/" className="text-[#be7c6b] hover:text-gray-600">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/About" className="hover:text-gray-600">About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">Reviews
                </li>
          <li className="cursor-pointer hover:text-gray-600">Videos
          </li>
          <li className="cursor-pointer">
            <Link to="/Contact" className="hover:text-gray-600">Contact</Link>
          </li>
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
        className="text-[#be7c6b] md:hidden bg-black bg-opacity-20 p-2 rounded-full"
        onClick={toggleMenu}
      >
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
