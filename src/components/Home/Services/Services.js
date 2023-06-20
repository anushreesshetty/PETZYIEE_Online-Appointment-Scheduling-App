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






// import React from 'react'
// export const Services = () => {
//     return(
//     <>
//     <div className="elementor-container elementor-column-gap-default">
//         <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-5f04ca6d" data-id="5f04ca6d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
//             <div className="elementor-widget-wrap elementor-element-populated">
//                 <div className="elementor-element elementor-element-41516cd3 elementor-widget elementor-widget-heading" data-id="41516cd3" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h6 className="elementor-heading-title elementor-size-default">Per </h6>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-5360353 elementor-widget elementor-widget-heading" data-id="5360353" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h5 className="elementor-heading-title elementor-size-default">$28-30
//                         </h5>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-6fd7fc3 elementor-widget elementor-widget-heading" data-id="6fd7fc3" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">A longer checking, perfect for families who may be away for a few hours at a time. Walk time is limited to 15 minutes per hour. So If you book a sitter for 3 hours, they will walk your pup up to 45 minutes
//                             long. We also feed, play , and keep your pup company. Additional $5 for every pup after first.</h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-7fe07dfd" data-id="7fe07dfd" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
//         <div className="elementor-widget-wrap elementor-element-populated">
//                 <div className="elementor-element elementor-element-1ff7fd24 elementor-widget elementor-widget-heading" data-id="1ff7fd24" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">30 Minute Check In</h4>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-df56cdf elementor-widget elementor-widget-heading" data-id="df56cdf" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h6 className="elementor-heading-title elementor-size-default">$24</h6>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-6ff8ba4 elementor-widget elementor-widget-heading" data-id="6ff8ba4" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">A quick check up in your home for your pups. Recommended for pups that need very short walks. Feeding provided too, play time if available. Additional $5 for every pup after first. Additional $5 for every
//                             pup after first.</h4>
//                     </div>
//                 </div>
//         </div>
//     </div>
//     <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-591ff6a2" data-id="591ff6a2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
//             <div className="elementor-widget-wrap elementor-element-populated">
//                 <div className="elementor-element elementor-element-7326a64b elementor-widget elementor-widget-heading" data-id="7326a64b" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">Day Time Care</h4>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-58f2449 elementor-widget elementor-widget-heading" data-id="58f2449" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h6 className="elementor-heading-title elementor-size-default">$75- $105 Per Day</h6>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-e2964cf elementor-widget elementor-widget-heading" data-id="e2964cf" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">Available in 3 to 6 hours long shifts. For example a sitter will come in to your home from 9 am and , check in for 12-2 leave and return at 7-9 pm. Perfect for families who will be away all day and who's
//                             pets will be fine alone in the evenings and an hour or two in the day time. We feed, look after your pet, and provide as much walks and dog run trips as necessary. Check-ins and personal messages from
//                             sitters as often as requested. Additional $5 for every pup after first.</h4>
//                     </div>
//                 </div>
//             </div>
//     </div>
//     <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-d3ee2b5" data-id="d3ee2b5" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
//             <div className="elementor-widget-wrap elementor-element-populated">
//                 <div className="elementor-element elementor-element-6e255be elementor-widget elementor-widget-heading" data-id="6e255be" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">Overnight Care
//                         </h4>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-3a624c0 elementor-widget elementor-widget-heading" data-id="3a624c0" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h6 className="elementor-heading-title elementor-size-default">80$ Per night</h6>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-7073985 elementor-widget elementor-widget-heading" data-id="7073985" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">Your sitter comes in the evening at about 7 pm. Gives your pup an evening walk and dinner. Then sleeps in your home over night. In the morning your pup will receive a morning walk and breakfast before the
//                             sitter departs. Additional $5 for every pup after first.</h4>
//                     </div>
//                 </div>
//             </div>
//     </div>
//     <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-48dd6d0" data-id="48dd6d0" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
//             <div className="elementor-widget-wrap elementor-element-populated">
//                 <div className="elementor-element elementor-element-939d9d6 elementor-widget elementor-widget-heading" data-id="939d9d6" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">24 Hour Care</h4>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-ccad066 elementor-widget elementor-widget-heading" data-id="ccad066" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h6 className="elementor-heading-title elementor-size-default">$125+ per 24 hours</h6>
//                     </div>
//                 </div>
//                 <div className="elementor-element elementor-element-d2c0ffd elementor-widget elementor-widget-heading" data-id="d2c0ffd" data-element_type="widget" data-widget_type="heading.default">
//                     <div className="elementor-widget-container">
//                         <h4 className="elementor-heading-title elementor-size-default">We stay at your home while you are out of town. This includes everything included in Daytime Care (3/4 hours) and Overnight Care. Its best for clients who will be away for some days. Check-ins and personal
//                             messages from sitters as often as requested. Discount available for multiple days. Additional $5 for every pup after first.</h4>
//                     </div>
//                 </div>
//             </div>
//     </div>
//     </>
//     )
// }




















// import React from 'react';

// import './Services.css';

// const serviceData = [
//     {
//         name: 'Fluoride Treatment',
//         img: flouride,
//         desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?'
//     },
//     {
//         name: 'Cavity Filling',
//         img: cavity,
//         desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?'
//     },
//     {
//         name: 'Teeth Whitening',
//         img: teath,
//         desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?'
//     }
// ]

// const Services = () => {
//     return (
//         <section className="services-container mt-5" id="serviceContaint">
//             <div className="text-center">
//                 <h5 className="brand-color">OUR SERVICES</h5>
//                 <h2>Services We Provide</h2>
//             </div>
//             <div className="d-flex justify-content-center mt-5">
//                 <div className="w-75 row">
//                     {
//                         serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
//                     }
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;