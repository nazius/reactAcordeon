import React, { Component } from 'react';

class AcordeonBody extends Component {
  render() {
    const { index, cuerpo = 'No hay contenido' } = this.props;
    return (
      <div 
        id={`collapse${index}`}
        className="collapse"
        aria-labelledby={`heading${index}`}
        data-parent="#accordion"
      >
        <div className="card-body">
          {cuerpo}
        </div>
      </div>
    );
  }
}

export default AcordeonBody;
