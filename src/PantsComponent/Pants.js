import React from 'react'
import './Pants.css';
function Pants(props){
    
     let mark=props.mark
    let currentCount= props.currentCount;
    let IdealCount= props.IdealCount;
    let difference= props.IdealCount - props.currentCount;
    return(

        <div className="Pants">
            <h2> Pants</h2>
            <div>
            <h3>mark {mark}</h3>
                <h3>currentCount {currentCount}</h3>
            </div>
            <div>
                <h3>IdealCount {IdealCount}</h3></div>

                <div> 
                    <h3>difference {difference}</h3>
                    
                </div>

        </div>
    );


}export default Pants;

