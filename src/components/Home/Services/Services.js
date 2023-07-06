import meter1 from "../../../assets/images/image.svg";
import meter2 from "../../../assets/images/image(1).svg";
import meter3 from "../../../assets/images/image(2).svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../../assets/images/arrow1.svg";
import arrow2 from "../../../assets/images/arrow2.svg";
import colorSharp from "../../../assets/images/color-sharp.png"

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      <>
    <section className="services" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Services</h2>
                        <p> We offer a range of services to help ensure the well-being of pets. These services include providing food and water, exercise, and basic medical care as needed. They also offer grooming services, pet transportation, training, and pet sitting or boarding services. Additionally, some we offer daycare services for pets and basic obedience training for dogs.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Im" />
                                <h5> Pet Grooming </h5>
                                <h5> Services include bathing, brushing, nail trimming, ear cleaning, teeth brushing, haircuts, and de-shedding.</h5>
                                    {/* A longer checking, perfect for families who may be away for a few hours at a time. Walk time is limited to 15 minutes per hour. So If you book a sitter for 3 hours, they will walk your pup up to 45 minutes long. We also feed, play , and keep your pup company. Additional $5 for every pup after first.</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Im" />
                                <h5>Play Date</h5>
                                <h5> Meet and Greet with fellow pets!</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Im" />
                                <h5>Pet Boarding</h5>
                                <h5>We promise to provide safe and comfort environment in your absence.</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Pet training</h5>
                                <h5>"Fur Real: Grooming Services that'll Make Your Pet the Bark of the Town!"</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    </>
  )
}
