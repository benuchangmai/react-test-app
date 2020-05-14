import React, { useState, useEffect, Component } from 'react';
import './App.css'
import Body from './Components/Body'
import TabList from './Components/TabList'

import config from './Components/config.js'
//get a reference to firebase
const firebase = require('firebase')


export class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id, msg) => {
      console.log(msg);
      this.setState({
        activeTab: id
      })
    }
  }


  render() {
    const tabs = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Images'
    },
    {
      id: 3,
      title: 'Videos'
    },
    {
      id: 4,
      title: 'FeedbackPage'
    },
        {
      id: 5,
      title: 'MoviePage'
    }
    ]

    return (
      <div className="body">
        <div className="nav-bar">
          <TabList tabs={tabs} 
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}/>
        </div>
        <div className="main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}
export default App;
