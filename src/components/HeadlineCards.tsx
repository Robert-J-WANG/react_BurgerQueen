import { headlineCards } from "@/data/data.js";

const HeadlineCards = () => {
  return (
    <div className="grid w-full gap-6 p-4 py-12 md:grid-cols-3">
      {/* Card */}
      {headlineCards.map((item) => {
        return (
          <div
            key={item.id}
            className="relative duration-300 rounded-xl hover:scale-105"
          >
            {/* Overlay */}
            <div className="absolute w-full h-full text-white bg-black/50 rounded-xl">
              <p className="px-2 pt-4 text-2xl font-bold">{item.title}</p>
              <p className="px-2">{item.content}</p>
              <button className="absolute mx-2 text-black bg-white border-white bottom-4">
                Order Now
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={item.image}
              alt="/"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeadlineCards;
