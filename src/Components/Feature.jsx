import "./img.css";
import Feature from "./ImageFeature";


const ImageFeatures = [
    {
     image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",isDone : false,
     title: "Fully Responsive Design",isTrue : false,
     discription: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
     isCorrect : false ,
     headline  : "", 
     people    : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
     name      : "Margaret E.",
     feedback  : "This is fantastic! Thanks so much guys!",
     
    },
     
    
    {

     image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",isDone : true,
     title: "Updated For Bootstrap 5",isTrue : true,
     discription: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
     isCorrect : true, 
     people    : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
     name      : "Fred S.",
     feedback  : "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    
    },
    
    
    
    {

     image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",isDone : false,
     title: "Easy to Use & Customize",isTrue : false,
     discription: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
     isCorrect : false,
     people    : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
     name      : "Sarah W.",
     feedback  : "Thanks so much for making these free resources available to us!",                                                                 
                                                            
    
    },
    
];




const Data = ()=>{
    return(
        <>
        <div style={{
           padding: "5px",
           margin: "10px",
           display:"flex",
           justifyContent:"space-between", 
          
        }}>
        <a className="navbar-brand">Start Bootstrap</a>
        <a className="btn btn-primary">Sign Up</a>
        </div>

        <div className="email">
        <h1>Generate more leads with a
            professional landing page!</h1>
         
            <form>
               
               <input type="email" placeholder="Email Address" required=""></input>
            </form>
             
             <form>

               <a className="btn btn-primary" style={{padding: "30px", position:"relative", left:"30px"}}>Submit</a>
             
           </form>
         
            </div> 

           <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"7%"}}>
           <div>
            <i className="fa-regular fa-window-restore" style={{fontSize:"7rem", color:"blue"}}></i>
           
            <h3>Fully Responsive</h3>
            <p className="lead">This theme will look great on any divice, no matter the size </p>
            </div> 

            
           <div>
           <i className="fa-solid fa-layer-group"style={{fontSize:"7rem", color:"blue"}}></i>
           
           <h3>Bootstrap 5 Ready</h3>
           <p className="lead">Featuring the latest build of the new Bootstrap 5 framework! </p>
           </div> 
            
           <div>
           <i className="fa-solid fa-terminal" style={{fontSize:"6rem",  color:"blue"}}></i>
           
           <h3>Easy to Use</h3>
           <p className="lead">Ready to use with your own content, or customize the source files!</p>
           </div> 
            
           </div> 
          
          {ImageFeatures.map((val)=>(

            
            <Feature key={val.title}  title={val.title} discription={val.discription} image={val.image} isDone={val.isDone} 
            isTrue={val.isTrue} isCorrect={val.isCorrect} headline={val.headline} people={val.people} name={val.name} feedback={val.feedback} />
              
          ))}
          <div
          style={{
           padding: "15px",
           margin: "1px",
           display:"flex",
           width: "",
           justifyContent:"space-between",
           }}>
          
         
          <div className="email">
        <h1>Ready to get started? Sign up now!</h1>
         
            <form>
               
               <input type="email" placeholder="Email Address" required=""></input>
            </form>
             
             <form>

               <a className="btn btn-primary" style={{padding: "15px", position:"relative", left:"30px"}}>Submit</a>
             
           </form>
        
            </div> 

            </div>
            
            <footer>
              <div style={{padding:"28px",display:"flex",justifyContent:"center"}}>
                <a href="About">About</a>. 
                <a href="Countact">Countact</a>.
                <a href="Terms of use">Terms of use</a>.
                <a href="Privacy Policy">Privacy Policy</a>
              </div>
  
           </footer>

            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
            <p className="text-muted small mb-4 mb-lg-0"> @ Your Website 2023.All Rights Reserved</p>

            </div>
            
            <div style={{display:"flex",justifyContent:"center"}}>
              <a href="#"><i className="fab fa-facebook fs-3"></i></a>
              
              <a href="#"><i className="fab fa-twitter fs-3"></i></a>
              
              <a href="#"><i className="fab fa-instagram fs-3"></i></a>
            </div>

        </>
    )
}

export default Data;
