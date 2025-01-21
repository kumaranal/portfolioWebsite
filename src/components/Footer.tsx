function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Passionate software developer with years of experience, specializing
            in Javascript Frameworks, delivering robust, scalable, and efficient
            web solutions.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4"></h2>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/anal-kumar-biswas-184b5627b"
              className="text-blue-500 transition-colors duration-300"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
          <p>West Bengal, India</p>
          <p>
            Email:{" "}
            <a
              href="mailto:analbiswas180@gmail.com"
              className="text-blue-500 underline"
            >
              analbiswas180@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
