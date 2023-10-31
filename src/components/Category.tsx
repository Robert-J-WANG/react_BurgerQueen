import { categories } from "@/data/data";

const Category = () => {
  return (
    <div className="w-full px-4 py-12 ">
      <h1 className="my-4 text-4xl font-bold text-center text-orange-600">
        <span className="py-2 duration-500 hover:border-b-4 hover:border-black/50">
          Menu Items Categories
        </span>
      </h1>
      {/* Categories */}
      <div className="grid gap-6 py-6 max-w-[200px] xs:max-w-full xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
          >
            <h2 className="font-bold md:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-16 md:w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
