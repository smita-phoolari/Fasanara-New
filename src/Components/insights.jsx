import React from "react";
import Slider from "react-slick";

export const Insights = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div id="insights" className="text-center">
       
        <div className='container'>
           <div className='col-md-12 col-md-offset-1 section-title'>
             <h2>Insights</h2>
          </div>
        <Slider {...settings}>
        <div className='slide-card'>
            <div className="slide-img">
             <img src="" alt=""></img> 
            </div>  
            <p className="slide-content">
                Digital Future. Use Of Digital Technology To Build Resilient Portfolios.
            </p>
            <p className="date-info"><time class="card-date"> 15 Aug 2022 </time><a href='https://www.fasanara.com/scenario04012021'>more <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path></svg></a></p>

        </div>
        <div className='slide-card'>  
            <div className="slide-img">
             <img src="" alt=""></img> 
            </div>   
            <p className="slide-content">
                The Market Economy In 2025: A Visualization Exercise
            </p>
            <p className="date-info"><time class="card-date"> Oct 2020 </time><a href='https://www.fasanara.com/22102019'>more <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path></svg></a></p>
            
        </div>

        <div className='slide-card'> 
            <div className="slide-img">
             <img src="" alt=""></img> 
            </div>      
            <p className="slide-content">
                How To Navigate The Cliff Edge In Markets.
            </p>
            <p className="date-info"><time class="card-date"> Oct 2019 </time><a href='https://www.fasanara.com/scenario-22102019'>more <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path></svg></a></p>
          
        </div>
        <div className='slide-card'>
            <div className="slide-img">
             <img src="" alt=""></img> 
            </div> 
                 
            <p className="slide-content">
                Transformational  Markets: History Being Made
            </p>
            <p className="date-info"><time class="card-date"> Aug 2019 </time><a href='https://www.fasanara.com/outlook-21082019'>more <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path></svg></a></p>
           
        </div>
        <div className='slide-card'>
            <div className="slide-img"> 
                <img src="" alt=""></img> 
            </div> 
                
            <p className="slide-content">
                Financial Complexity & Nonlinear Dynamics
            </p>
            <p className="date-info"><time class="card-date"> Aug 2018 </time><a href='https://www.fasanara.com/financial-complexity-and-nonlinear-'>more <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path></svg></a></p>
        
        </div>
        <div className='slide-card'>
            <div  className="slide-img">
                <img src="" alt=""></img> 
            </div> 
               
            <p className="slide-content">
                The Market Economy In 2020. The Emergence of a New Monetary Orthodoxy
            </p>
            <p className="date-info"><time class="card-date"> Jun 2016 </time><a href='https://www.fasanara.com/scenario-07062016'>more <svg class="arrow" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z"></path></svg></a></p>
           
        </div>
        </Slider>
      </div>
      </div>
       
        );
    }