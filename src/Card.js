import React from "react"; //must import coz ,JSX(HTML like is used here..)

const Card = (props) => {
    const {username,email,id} = props;
    return ( //should return onlu one thing
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src ={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{username}</h2>
                {/* <p>{props.email}</p> */}
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;