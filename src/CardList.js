import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    //react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
    const cardComponent = robots.map((user,i) => {
        return <Card id = {robots[i].id} username = {robots[i].username} key = {i} email={robots[i].email}/>
    })
    // return(
    //     <div>
    //         <Card id = {robots[0].id} username = {robots[0].username} email={robots[0].email}/>
    //         <Card id = {robots[1].id} username = {robots[1].username} email={robots[1].email}/>
    //         <Card id = {robots[2].id} username = {robots[2].username} email={robots[2].email}/>
    //         <Card id = {robots[3].id} username = {robots[3].username} email={robots[3].email}/>
    //         <Card id = {robots[4].id} username = {robots[4].username} email={robots[4].email}/>
    //         <Card id = {robots[5].id} username = {robots[5].username} email={robots[5].email}/>
    //     </div>
    // );
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;