import Image from "next/image";

export default function News() {
  const articles = [
    {
      title: "New Calves Bring Hope to Our Conservation Meadows",
      date: "January 12, 2025",
      image: "/images/cows1.jpg",
      content:
        "This week we welcomed several new calves born on our conservation land. These births are a promising sign for our biodiversity program, which supports healthy native grasslands and sustainable cattle stewardship.",
    },
    {
      title: "Sunshine and Support at Our Summer Wildlife Walk",
      date: "August 5, 2024",
      image: "/images/cows3.jpg",
      content:
        "Dozens of supporters joined us for a guided wildlife walk across our fields. Together, we explored local habitats, learned about our rewilding efforts, and enjoyed meeting the animals who call this place home.",
    },
    {
      title: "Rainy Day Rescue: Volunteers Help Relocate Vulnerable Herd",
      date: "October 22, 2024",
      image: "/images/cows4.jpg",
      content:
        "During unexpected flooding, our volunteers stepped up to help move a vulnerable herd to safer ground. Their dedication ensured that every animal stayed safe, warm, and well-cared for throughout the storm.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Latest News</h1>
      <p className="text-lg mb-10">
        Stay updated with our latest activities and events.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-56 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{article.date}</p>
              <p className="text-gray-700">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
