import { headlineCards } from "@/data/data.js";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      {headlineCards.map((item) => {
        return (
          <div
            key={item.id}
            className="rounded-xl relative hover:scale-105 duration-300"
          >
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">{item.title}</p>
              <p className="px-2">{item.content}</p>
              <button className="border-white bg-white text-black mx-2 absolute bottom-4">
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
