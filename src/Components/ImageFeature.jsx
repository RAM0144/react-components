/* eslint-disable react/prop-types */
import propTypes from "prop-types";
import "./img.css"
const ImageFeatures = (props)=>{
 console.log(props)
    
        return(
         <>
        
        {props.isTrue?(
             <h3 style={{float:"right"}} key={props.title}>{props.title}</h3>
        ):(
            <h3 style={{float:"left"}} key={props.title}>{props.title}</h3>
        )}

        {props.isDone?(
            
            <img src={props.image} alt={props.image} style={{float:"left",width:"50%"}}></img>
         ):(
            
            <img src={props.image} alt={props.image} style={{float:"right",width:"50%"}}></img>
         )}


         {props.isCorrect?(
             <p className="lead" style={{float:"right",columnSpan:"revert-layer"}} key={props.discription}>{props.discription}</p>
         ):(
            <p className="lead" style={{float:"left"}} key={props.discription}>{props.discription}</p>
         )}
 
              <div>

            <h4  key={props.title}>{props.headline}{props.headline}</h4>
           
           <img src={props.people} alt={props.people} style={{width:"20%"}} className="people"></img>

           <h5 style={{display:"flex",justifyContent:"center"}} key={props.name}>{props.name}</h5>
           <p style={{display:"flex",justifyContent:"center"}} key={props.feedback}>{props.feedback}</p>
            
            </div>
            

         </>
        
          
        )
        
     };
     
    ImageFeatures.props = {
        title      : propTypes.string,
        discription: propTypes.string,
        image      : propTypes.string,
        headline   : propTypes.string,
        people     : propTypes.string,
        name       : propTypes.string,
        feedback   : propTypes.string,
    };


 export default ImageFeatures;