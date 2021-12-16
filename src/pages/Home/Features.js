import { features } from "./HomeBodyText";
import featuresImg from "../../assets/stylish-black-woman.png";

const Features = () => {
  return (
    <section className="font-montserrart px-4 sm:flex sm:gap-x-14 sm:items-center">
      <figure className="hidden sm:flex items-center justify-around py-8 rounded-tl-3xl rounded-br-3xl shadow-2xl homebody-features border border-white">
        <div className="w-10/12">
          <img
            src={featuresImg}
            alt="Black woman smiling with her car"
            className="object-cover w-full"
          />
        </div>
      </figure>
      <aside>
        <div className="hidden sm:block mb-9" style={{ color: "#291A2D" }}>
          <p>
            Your car’s secuirity is a great deal to you that is why we are here
            to help
          </p>
          <h3 className="font-bold text-xl">
            Feel The Best Experience With Aigis
          </h3>
          <span className="block mt-1 rounded-lg w-12 h-1 bg-gray-500"></span>
        </div>
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-x-6 mb-6">
            <div className="rounded-lg p-2 homebody-features">
              <img src={feature.image} alt={feature.title} className="w-full" />
            </div>
            <div className="text-xs sm:text-sm" style={{ color: "#291A2D" }}>
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="max-w-xs">{feature.text}</p>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Features;
