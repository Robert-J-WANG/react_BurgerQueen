const Hero = () => {
  return (
    <div className="w-full p-4">
      <div className="max-h-[500px] relative rounded-3xl overflow-auto">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 hover:blur-md duration-1000 cursor-pointer flex flex-col justify-center">
          <h1 className="px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            {" "}
            <span className="text-orange-500">Burgers</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
