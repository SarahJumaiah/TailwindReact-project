import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] relative">
      <Navbar />

      <section className="container mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-gray-600 mb-8">
          Have a question or just want to say hi? Feel free to reach out to me
          using the contact form below or through my social media channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Feel free to send me an email or give me a call. I'd love to hear
              from you!
            </p>
            <p className="mb-4">
              <strong>Email:</strong> contact@foodblogger.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +123-456-7890
            </p>
            <p className="mb-4">
              <strong>Address:</strong> 123 Food Street, Blogger City, FB 45678
            </p>
          </div>

          <form className="bg-white p-6 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border rounded-md"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#c99484] text-white font-bold py-3 px-6 rounded-md hover:bg-[#be7c6b] transition duration-300"
            >
              Send Message
            </button>
          </form>
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

      <Footer />
    </div>
  );
};

export default Contact;
