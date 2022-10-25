import React from "react";

const Scroll = (props) => {
    // return props.children; //though we didn't pass any props from scroll by default its children are props i.e; cardlist is a prop here
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '600px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;