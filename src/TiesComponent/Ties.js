import React, {Component} from "react";
import './Ties.css'
class Ties extends Component{

    render (props){
        let mark=this.props.mark;
    let  currentCount= this.props.currentCount;
    let IdealCount= this.props.IdealCount;
    let difference= this.props.IdealCount - this.props.currentCount;
    return (
        <div className="Ties">
        <h2> Ties</h2>
        <div><h3>mark {mark}</h3></div>
        <div>
            <h3>currentCount {currentCount}</h3>
        </div>
        
        <div>
            <h3>IdealCount {IdealCount}</h3></div>
            <div> 
                <h3>difference {difference}</h3>
            </div>

    </div>
    );
    }
}
export default Ties;
