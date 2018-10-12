import React, { Component } from 'react';
import AcordeonBody from './AcordeonBody.js';
import _ from 'lodash';

class Acordeon extends Component {

  render() {
    return (
      <div id="accordion">
        { _.map(this.props.content, (item, index) =>
          <div className="card">
            <div className="card-header" id={`heading${index}`}>
              <h5 className="mb-0"> 
                <button
                  className="btn btn-link"
                  data-toggle='collapse'
                  data-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {_.get(item, 'header', 'no title')}
                </button>
              </h5>
            </div>
            <AcordeonBody index={index} cuerpo={_.get(item, 'body', 'no body')}/>
          </div>
        )}
      </div>
      );
  }
}

export default Acordeon;
