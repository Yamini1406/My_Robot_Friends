import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { robots } from "./robots";
import Scroll from './Scroll.js'
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";

//states are like objects..parent will tell the state and it is passed as a props to the child
// const state = {
//     robots: robots,
//     searchfield: ''
// }

//In app, we have cardList,title,search bar
//To have a state,
// const App = () => {
class App extends Component{
    //to invoke a state,
    constructor(){
        super(); //to call component's constructor->to use this keyword
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: ''
        }
        console.log('1');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}));
        // this.setState({robots: robots});
        console.log('2');
    }

    // OUR AIM IS TO MAKE SEARCHBOX AND CARDLIST COMMUNICATE
    //user-defined fn
    onSearchChange = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value});
        //IMP NOTE: here this.state below doesn't give output if the function is defined like
        //onSearchChange(event){} because event is coming from search.js file..so it assumes this. from that file but search/js
        //file doesn't have this.state.robots-->and thus no output.so Inorder to let the fn(if user-defined) know that
        //this is from the custructor of App.js define the function in such way.
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchfield);
        // })
    }

    render() { 
        //to remove this.state.ncjkd
        const {robots, searchfield} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log('3');
        return (
        <div className="tc">
            <h1>RoboFriends</h1>
            {/* We use this keyword coz onSearchChange is an object in class */}
            <SearchBox searchChange={this.onSearchChange}/>
            {/* <CardList robots={robots}/> */}
            {/* we aren't gonna use entire robots array */}
            {/* <CardList robots = {this.state.robots}/> */}
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
        );
    }
}

export default App;

/*
1)mounting 
2)updating
3)demounting

In mounting, the order of execution is constructor
                                        render
                                        componentdidmount
    
    here, the order of execution is: 1 3 2 3 -> rendered twice coz robot arry is changed

Now we don't wanna hard code the users...instead we want to it load from json evertime the page is loaded..initially has to be empty
*/