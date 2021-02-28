import React, {Component} from "react";
import './Ties.css';
class Ties extends Component{

    render (props){
    let  StartCount= this.props.StartCount;
    let IdealCount= this.props.IdealCount;
    let difference= IdealCount - props.StartCount;
    return (
        <div className="Ties">
        <h2> Ties</h2>
        <div>
            <h3>StartCount: {StartCount}</h3>
        </div>
        <div>
            <h3>IdealCount:{IdealCount}</h3></div>
            <div> 
                <h3>{difference}</h3>
            </div>

    </div>
    );
    }
}
export default Ties;
