import React, { Component } from 'react';
//import App from App.js;
import styles from './mystyle.module.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      });
    });

  }

  render(){
    var {isLoaded,items} = this.state;

    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

      return(
        <div className="App">

         <h1 className={styles.bigblue}>USER TABLE</h1>;
        {items.map(item => (
          <li >
<table id="demotable" cellpadding = "5" cellspacing = "5" bgcolor = "CORNSILK"  width = "100%" height = "150">
<tr id="demotd">
<th>ID</th>
<th>NAME</th>
<th>USERNAME</th>
<th>EMAIL</th>
<th>PHONE</th>
<th>WEBSITE</th>
</tr>
<tr>
<td id="demotd">{item.id}</td>
<td>{item.name}</td>
<td><a href="one.html">{item.username}</a></td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>{item.website}</td>
</tr>
</table>

          </li>
        ))};

        </div>
      );


  }
}

export default App;
