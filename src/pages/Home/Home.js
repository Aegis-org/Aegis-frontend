import React, { useState } from "react";
import HomeBody from "../../components/HomeBody";
import SectionHeader from "../../components/SectionHeader";
import VerifyAdvert from "../../components/VerifyAdvert";
import VerifyInput from "../../components/VerifyInput";
import Features from "./Features";
import Carousel from "../../components/Carousel";
import { products } from "../../utils/DummyProductData";
import { modal, text } from "./HomeBodyText";
import VerifyModal from "../../components/VerifyModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [testVehicleData] = useState("123456789");

  const handleClose = () => setShowModal(false);

  return (
    <main className="max-w-6xl mx-auto mt-8">
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

      <VerifyInput
        setShowModal={setShowModal}
        setShow={setShow}
        testVehicleData={testVehicleData}
      />

      {show ? (
        <VerifyModal
          showModal={showModal}
          title={modal[0].title}
          smiley={modal[0].smiley}
          message={modal[0].message}
          image={modal[0].image}
          imgAlt={modal[0].imgAlt}
          handleClose={handleClose}
        />
      ) : show == null ? (
        <VerifyModal
          showModal={showModal}
          title={modal[2].title}
          image={modal[2].image}
          imgAlt={modal[2].imgAlt}
          btn={modal[2].btn}
          handleClose={handleClose}
          // doSomething={doSomething}
        />
      ) : (
        <VerifyModal
          showModal={showModal}
          title={modal[1].title}
          smiley={modal[1].smiley}
          message={modal[1].message}
          image={modal[1].image}
          imgAlt={modal[1].imgAlt}
          handleClose={handleClose}
        />
      )}

      <SectionHeader heading="Why Choose Us" />

      <HomeBody
        title1={text[1].title}
        subtitle={text[1].subtitle}
        text={text[1].text}
        btn1={text[1].btn}
        image1={text[1].image}
      />

      <SectionHeader heading="Features we offer" text={text} />

      <Features />

      <div className="sm:hidden">
        <SectionHeader heading="Our MarketPlace" />
      </div>
      <div className="hidden sm:block">
        <SectionHeader heading="Explore Our MarketPlace" text1={text} />
      </div>

      <section className="w-min mx-auto">
        <Carousel data={products} />
      </section>

      <section className="hidden sm:block home-verify-advert pb-8 mb-8">
        <VerifyAdvert title2={text[3].title} text={text[3].text} />

        <VerifyInput setShowModal={setShowModal} />
      </section>
    </main>
  );
};

export default Home;
