import React, { Component } from 'react';
import Acordeon from './components/Acordeon.js';
import RandomComponent from './components/RandomComponent.js';


class App extends Component {
  data = 
    [
      { header: 'Cras non lectus efficitur', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      { header: 'Just text', body: 'Etiam consectetur tempor purus vitae porta. Duis non ante felis. In congue eget tortor a mattis. Integer tincidunt lorem id magna molestie ullamcorper. Pellentesque facilisis vitae lectus sed eleifend. Proin ultricies auctor elit, nec pulvinar nibh gravida at. Nullam in dignissim elit. Fusce eros metus, blandit vitae sodales ac, hendrerit at velit.'},
      { header: 'Content in h5', body: <h5> Some Content </h5>},
      { header: 'Random Component', body: <RandomComponent />},
    ]

  render() {
    return (
      <div className="App">
        <Acordeon
          content={this.data}
        />
      </div>
    );
  }
}

export default App;
