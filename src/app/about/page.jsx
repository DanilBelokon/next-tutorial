import Image from "next/image";

export const metadata = {
  title: "About page | Next JS tutorial",
  description: "Info about our company",
  keywords: "business, next js, react",
};

const AboutPage = () => {
  return (
    <section className="content">
      <h2 className="section-title">Фото</h2>
      <p> Это фото Ильи с братом. Он во всем лучше Ильи.</p>
      {/* <img src="./dodge-400-200.jpg" alt="Dodge" /> */}
      <Image
        src="/brother.png"
        alt="Dodge"
        width="450"
        height="270"
        priority
      ></Image>
      <br />
      <br />
      <p> Это сам Илья.</p>
      <Image
        src="https://sun9-20.userapi.com/s/v1/ig2/dK05_YroWtNkEKNe9E2FVJyopoMay7A94nkXoNScZqqpyJO-o525KMKXFRqU37iWAcvNh1vZzLcQwqJa1ITE061l.jpg?quality=96&as=32x33,48x49,72x73,108x110,160x163,240x244,360x366,480x488,540x549,640x651,720x732,1062x1080&from=bu&cs=1062x0"
        alt="Img"
        width="450"
        height="270"
        priority
      />
    </section>
  );
};

export default AboutPage;
