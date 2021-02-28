import './Pants.css';

function Pants(props){

    let StartCount= props.StartCount;
    let IdealCount= props.IdealCount;
    let difference= props.IdealCount - props.StartCount;
    return(

        <div className="Pants">
            <h2> Pants</h2>
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


}export default Pants;

