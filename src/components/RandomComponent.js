import React, { Component } from 'react';

class RandomComponent extends Component {
  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://via.placeholder.com/350x350" alt="none" />
        <div className="card-body">
          <p className="card-text">Proin faucibus sem non dictum pellentesque. Vestibulum efficitur imperdiet orci ut gravida. Nam facilisis turpis in nisi luctus commodo. Sed convallis elit rhoncus maximus vestibulum. Aenean volutpat sagittis orci, ac congue eros maximus at. Suspendisse pharetra libero enim. Phasellus tristique enim tellus. Maecenas vulputate tortor id porttitor porta. Integer varius aliquam tincidunt. Sed a nulla erat.</p>
        </div>
      </div>
      );
  }
}

export default RandomComponent;
