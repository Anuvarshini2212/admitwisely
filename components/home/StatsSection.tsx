export default function StatsSection() {

  const stats = [
    {
      title: "500+",
      subtitle: "Top Colleges",
    },

    {
      title: "10K+",
      subtitle: "Students Helped",
    },

    {
      title: "100+",
      subtitle: "Cities Covered",
    },

    {
      title: "95%",
      subtitle: "Placement Insights",
    },
  ];

  return (
    <section className="py-20 bg-blue-600">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20"
            >

              <h2 className="text-5xl font-bold text-white">
                {stat.title}
              </h2>

              <p className="mt-4 text-blue-100 text-lg">
                {stat.subtitle}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}