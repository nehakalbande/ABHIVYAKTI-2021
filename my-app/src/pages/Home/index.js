import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="abhivyakti.jpeg"
        id="intro"
      />

      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        button={AboutContent.button}
        icon="abhivyakti-01.jpg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        button={MissionContent.button}
        icon="abhivyakti-01.jpg"
        id="mission"
      />

      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={ProductContent.text}
        button={ProductContent.button}
        icon="abhivyakti-01.jpg"
        id="product"
      />
    </Container>
  );
};

export default Home;
