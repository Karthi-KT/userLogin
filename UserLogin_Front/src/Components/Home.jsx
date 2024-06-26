const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <section className="h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('')",
          }}
        ></div>
        <div className="relative z-10 p-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Be Future-Proof
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Master the skills and build your career in tech
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Explore Courses
          </button>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        Section-2
      </section>

      <section className="h-screen flex items-center justify-center overflow-x-scroll">
        <div className="min-w-screen flex items-center justify-center">
          <div className="flex-shrink-0 w-full lg:w-3/4 xl:w-2/3">
            {/* Your content for Section-3 */}
            <h2 className="text-4xl font-bold mb-4">Section 3 Content</h2>
            <p className="text-lg mb-6 sticky">
              This is where your horizontal scroll content goes. Add your
              elements here.
            </p>
            {/* Example cards */}
            <div className="flex space-x-4">
              <div className="bg-gray-200 w-96 h-64 flex-shrink-0 rounded-lg shadow-lg">
                Card 1
              </div>
              <div className="bg-gray-200 w-96 h-64 flex-shrink-0 rounded-lg shadow-lg">
                Card 2
              </div>
              <div className="bg-gray-200 w-96 h-64 flex-shrink-0 rounded-lg shadow-lg">
                Card 3
              </div>
              <div className="bg-gray-200 w-96 h-64 flex-shrink-0 rounded-lg shadow-lg">
                Card 3
              </div>
              <div className="bg-gray-200 w-96 h-64 flex-shrink-0 rounded-lg shadow-lg">
                Card 3
              </div>

              {/* Add more cards as needed */}
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        Section-4
      </section>
    </div>
  );
};

export default Home;
