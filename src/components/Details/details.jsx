import {
    BrowserRouter as Router,
    Route,
    Routes,
    // Switch,
    Link
  } from 'react-router-dom';
  import logo from "../../assets/images/Screenshot_2024-05-28_181255-removebg-preview 1.png"
  import heroImg from "../../assets/images/hero 1.png"
  import people from "../../assets/images/Symbol.png"
  import img1 from "../../assets/images/Symbol-1.png"
  import img2 from "../../assets/images/Symbol-2.png"
  import img3 from "../../assets/images/Symbol-3.png"
  import img4 from "../../assets/images/about-1.jpg.png"
  import img5 from "../../assets/images/about-2.jpg.png"
  import img6 from "../../assets/images/about-3.jpg.png"
  import img7 from "../../assets/images/about-4.jpg.png"
  import img8 from "../../assets/images/Symbol-1.png"
  import img9 from "../../assets/images/Symbol(1).png"
  import img10 from "../../assets/images/Symbol(1).png"
  import img11 from "../../assets/images/menu-1.jpg.png"
  import img12 from "../../assets/images/menu-2.jpg.png"
  import img13 from "../../assets/images/menu-3.jpg.png"
  import img14 from "../../assets/images/menu-4.jpg.png"
  import img15 from "../../assets/images/menu-5.jpg.png"
  import img16 from "../../assets/images/menu-6.jpg.png"
  import img17 from "../../assets/images/Container.png"
  import img18 from "../../assets/images/Group 10121931.png"
  import img19 from "../../assets/images/Rectangle 10029.png"
  import img20 from "../../assets/images/Rectangle 10029.png"
  import img22 from "../../assets/images/testimonial-4.jpg.png"
  import img21 from "../../assets/images/Symbol.png"
  import img23 from "../../assets/images/couple-gf770e433f_1280 1.png"
  
  
  function Details() {
    
    return (
      <>
        <section class="details">

            <div class="detail" id="detail1">
                <div class="detailImg">
                    <img src={people} alt=""/>
            
                </div>
                <h1>Master Chefs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quasi?</p>
            </div>


            <div class="detail">
                <div class="detailImg">
                    <img src={img1} alt=""/>
            
                </div>
                <h1>Master Chefs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quasi?</p>
            </div>


            <div class="detail">
                <div class="detailImg">
                    <img src={img2} alt=""/>
            
                </div>
                <h1>Master Chefs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quasi?</p>
            </div>

            <div class="detail">
                <div class="detailImg">
                    <img src={img3} alt=""/>
            
                </div>
                <h1>Master Chefs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quasi?</p>
            </div>

        </section>
      </>
    )
  }
  
  export default Details