import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Data Science",
      desc:
        "A core interest of me is data science. The art of capturing, maintaining, processing, analyzing and communicating data is a beautiful and powerful craft. I mainly focus on computer vision and reinforcement learning, but I am open to all concepts.",
      img:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cccblog.org%2Fwp-content%2Fuploads%2F2011%2F03%2Fscience-data.jpg&f=1&nofb=1",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Web Development",
      desc:
        "Another big part of my CS passion is web development. I have found an interest in designing and developing websites as well as smaller projects. I have experience with JavaScript, NodeJS and ReactJS.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Mobile Development",
      desc:
        "Next to data science and web development I am getting started with mobile development, mostly using kotlin. I am still at the very start of my road, but I am enjoying the development of mobile applications.",
      img:"https://www.freepngimg.com/download/web_development/76841-development-web-mobile-app-hand-cell-phone.png"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div className="heading">
        <h1>Areas of Interest</h1>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                 <a href="https://github.com/NicoSchultze"><span>Projects</span></a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}

                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}