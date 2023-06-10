// this is the main component that gets rendered by the browser

import React, {Component} from 'react'
import UserInfo from './Component/UserInfo' 

class App extends Component{
      // creation of state object containing the user information
    state = {
      User: [
        {firstName: "Ojo", lastName: "Lola", emailAddress: "lola@gmail.com", phoneNumber: "09088765431"},
        {firstName: "Lekan", lastName: "Cole", emailAddress: "cole@gmail.com", phoneNumber: "08088765432"},
        {firstName: "Ojo", lastName: "Lola", emailAddress: "lola@gmail.com", phoneNumber: "08018765433"},
        {firstName: "Ojo", lastName: "Lola", emailAddress: "lola@gmail.com", phoneNumber: "09188765434"},
        {firstName: "Ojo", lastName: "Lola", emailAddress: "lola@gmail.com", phoneNumber: "08188765437"},
      ],
    };
    render(){
      return(
        <div className="App" style={{display: 'grid', alignItems: "space-around", backgroundColor: "pink"}}>
          <div style={{color: 'purple',}}>

          <UserInfo name1 = {this.state.User[0].firstName} name2 = {this.state.User[0].lastName} email = {this.state.User[0].emailAddress} phone ={this.state.User[0].phoneNumber}/>
          </div>
          <div style={{color: 'white',}}>
          <UserInfo name1 = {this.state.User[1].firstName} name2 = {this.state.User[1].lastName} email = {this.state.User[1].emailAddress} phone ={this.state.User[1].phoneNumber} />
          </div>
          <div style={{color: 'purple',}}>
          <UserInfo name1 = {this.state.User[2].firstName} name2 = {this.state.User[2].lastName} email = {this.state.User[2].emailAddress} phone ={this.state.User[2].phoneNumber} />
          </div>

        <div style={{color: 'white',}}>
          <UserInfo name1 = {this.state.User[3].firstName} name2 = {this.state.User[3].lastName} email = {this.state.User[3].emailAddress} phone ={this.state.User[3].phoneNumber} />
        </div>
        <div>
          <UserInfo name1 = {this.state.User[4].firstName} name2 = {this.state.User[4].lastName} email = {this.state.User[4].emailAddress} phone ={this.state.User[4].phoneNumber} />
        </div>
        </div>

        
        
      )
    }
  }
  export default App