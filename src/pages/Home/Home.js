import React from "react";
import HomeBody from "../../components/HomeBody";
import VerifyAdvert from "../../components/VerifyAdvert";
import { text } from "./HomeBodyText";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <HomeBody
        title={text[0].title}
        subtitle={text[0].subtitle}
        text={text[0].text}
        btn={text[0].btn}
        image={text[0].image}
      />

      <VerifyAdvert
        title={text[2].title}
        subtitle={text[2].subtitle}
        text={text[2].text}
        image={text[2].image}
      />

      <HomeBody
        title1={text[1].title}
        subtitle={text[1].subtitle}
        text={text[1].text}
        btn1={text[1].btn}
        image1={text[1].image}
      />

      <VerifyAdvert title={text[3].title} text={text[3].text} />
    </div>
  );
};

export default Home;
