import React from "react";
import "./index.css";
function App() {
  return (
    <> 
   <header class="header">
        <div class="container flex-between">
          <div class="logo">
            <a href="#"><h1>
                healthcaregrid
            </h1>
              <img src="" alt="" />
            </a>
          </div>
          <nav class="main-navgation flex-between flex-ver-top">
            <div class="nav-links">
              <a href="/Shoonytvam/Product.html">Product</a>
              <a href="#pricing">About US</a>
              <a href="#resources">Contact US</a>
            </div>
            <div class="nav-buttons">
              <a href="/Shoonytvam/Login.html" class="log-in">Login</a>
              <a href="/Shoonytvam/Login.html#sign-up-form" class="sign-up btn btn-sm">Become Aggregator</a>
            </div>
          </nav>
          <div class="burger-menu">
            <i class="fa-regular fa-bars icon"></i>
          </div>
        </div>
      </header>
     
       
{/* ----------------------Landing--------------------------------- */}
   <section className="landing">
     <div className="landing-text">
                   <h1>More than just A ePharmacy</h1>
       <p>
       Be a part of the eRevolution       </p>
       <a href="#Shoonytam" className="btn btn-lg">Get Started</a>
       <img src="./assets/img/Circles-1-1.svg" />  
     </div>
     
     <div className="landing-image">
       <img src="./assets/img/op.jpeg" alt="Working Illustration" />
     </div>
   </section>

{/* _____________Shoontyvam Bar______________________ */}
    <div className="Shoonytvam">
     <div className="container">
  <h1>Find Your Nearest Pharmacy </h1>
  <div className="search-bar">
      <form>
          <div className="location-input" >
              <label>Location</label>
              <input type="Location" placeholder="where are you living?" />
          </div>
              <div>
              <label>Pharmacy Name</label>
              <input type="text" placeholder="Pharmacy Name "/>
          </div>
       
          <div>
              <label>Delivery Date</label>
              <input type="Date" placeholder="Add Date"/>
          </div>
          <div>
           <label>Delivery Time</label>
           <input type="Time" placeholder="Add Time"/>
           </div>
          <button type="sumit"><img src="./assets/img/search.png"/></button>
      </form>
  </div>
</div>
</div>
  {/* -------------Advanced Feature--------------------------------- */}

       <div className="more-features">
         <div className="section-header">
           <h2>The Foundation</h2>
           <p>
            
           </p>
           <bgimg src="./assets/img/Circles-1-1.svg" />  
         </div>
         <div className="more-features-content">
           <div className="feature">
             <div className="feature-illustration">
               <img src="./assets/img/icon-brand-recognition.svg" alt="Feature Illustration Icon" />
             </div>
             <div className="feature-details">
               <h3>Vision</h3>
               <p>
               To be a world-class Quick Commerce Player for healthcare
               </p>
             </div>
           </div>
           <div className="feature">
             <div className="feature-illustration">
               <img src="./assets/img/icon-detailed-records.svg" alt="Feature Illustration Icon" />
             </div>
             <div className="feature-details">
               <h3>Mission</h3>
               <p>
               To meet your healthcare needs at an affordable cost

               </p>
             </div>
           </div>
           <div className="feature">
             <div className="feature-illustration">
               <img src="./assets/img/customizable.svg" alt="Feature Illustration Icon" />
             </div>
             <div className="feature-details">
               <h3>Values</h3>
               <p>
               Your time is incredibly valuable to us, just as it is to you
 </p>
             </div>
           </div>
         </div>
       </div>


   <section className="scene">
     <div className="sun"></div>
     <div className="bg"></div>
     <img alt="healthcaregrid" src="./assets/img/health.svg" className="car1"/>
     <img alt="healthcaregrid" src="./assets/img/health.svg" className="car2"/>
 </section>
 <script>
     const sun = document.querySelector('.sun');
     const  body = document.querySelector('.body');
     sun.onclick = function()
 </script>

{/* ----------------Pricing---------------------------- */}


   <section className="pricing" id="pricing">
     <div className="container">
       <div className="section-header">
         <h2>Join healthcaregrid</h2>
         <a href="#Pricing-card" className="btn btn-lg">Get Started</a>
       </div>
     </div>
   </section>
   
{/* ------------Our Team--------------------- */}




{/* --------------------How its Works------------------- */}

{/* --------------------------------- */}

{/* -------------------Footer----------------- */}


<footer>
 <div className="waves">
     <div className="wave" id="wave1"></div>
     <div className="wave" id="wave2"></div>
     <div className="wave" id="wave3"></div>
     <div className="wave" id="wave4"></div>
 </div>
 <ul className="social_icon">
     <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
     <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
     <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
     <li><a href="#"><ion-icon name="logo-instagram"></ion-icon>
     </a></li>
 </ul>
 <ul className="menu">
     <li><a href="#">Home</a></li>
     <li><a href="#">About Us</a></li>
     <li><a href="#">Contact us</a></li>
     <li><a href="#">Privacy Poilcy</a></li>
    

 </ul>
 <p > ©2022 healthcaregrid.in | All Rights Reserved </p>
</footer>
{/* ==============================================================================footer----------------------- */}

</>
  );
}

export default App;
