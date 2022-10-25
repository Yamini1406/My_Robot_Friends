import React from "react";
import "./Hello.css";
import 'tachyons';

//In class format
// class Hello extends React.Component{
//     render(){
//         return(
//             <div className="f2 tc">
//                 <h1>Hello Friends!</h1>
//                 <p>{this.props.greeting}</p>

//             </div>
//         );
//     }
// }

//In function format
const Hello = (props) => {
    return (
        <div className="f2 tc">
            <h1>Hello guys!</h1>
            <p>{props.greeting}</p>
        </div>
    );
}

export default Hello;