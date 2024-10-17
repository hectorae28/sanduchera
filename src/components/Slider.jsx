import Card from "./Card"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ArrowNext = (props) => {
  const { onClick } = props;
  return (
    <button className=" z-10 absolute top-1/2 right-0 opacity-60 md:-right-14 md:opacity-100" onClick={onClick}>
      <svg className="w-8 h-8 md:w-14 md:h-14 fill-gray-500" viewBox="0 0 26 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4954 8.96933C17.8048 13.3185 22.1227 17.6784 26 21.4929C21.9877 25.4856 17.9896 29.489 12.4954 34.0342C8.77802 37.1108 4.20421 40.5901 -1.90735e-06 43C2.31001 38.8861 5.95626 34.0984 8.93795 30.4658C11.6709 27.1433 14.3078 24.2485 16.9483 21.5071C14.3114 18.8085 11.056 15.1259 8.93084 12.5414C4.31083 6.92663 1.50683 2.68082 -1.90735e-06 0C2.74357 1.56856 6.88737 4.33137 12.4954 8.96933Z" /* fill="#fff" */ />
      </svg>
    </button>
  )
}

const ArrowPrev = (props) => {
  const { onClick } = props;
  return (
    <button className=" z-10 absolute top-1/2 left-0 rotate-180 opacity-60 md:-left-14 md:opacity-100" onClick={onClick}>
      <svg className="w-8 h-8 md:w-14 md:h-14 fill-gray-500" viewBox="0 0 26 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4954 8.96933C17.8048 13.3185 22.1227 17.6784 26 21.4929C21.9877 25.4856 17.9896 29.489 12.4954 34.0342C8.77802 37.1108 4.20421 40.5901 -1.90735e-06 43C2.31001 38.8861 5.95626 34.0984 8.93795 30.4658C11.6709 27.1433 14.3078 24.2485 16.9483 21.5071C14.3114 18.8085 11.056 15.1259 8.93084 12.5414C4.31083 6.92663 1.50683 2.68082 -1.90735e-06 0C2.74357 1.56856 6.88737 4.33137 12.4954 8.96933Z" /* fill="#fff" */ />
      </svg>
    </button>
  )
}
const SliderComponent = ({ data }) => {
  var settings = {
    dots: false,

    infinite: true,
    speed: 1000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  };
  return (
    <Slider {...settings} className="flex gap-4 w-full">
      {data?.map((item, index) => (
        <Card index={index + 1} key={index} {...item} />
      ))}
    </Slider>
  )
}

export default SliderComponent