import React from "react";
import cn from "classnames";  

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

 onChangeClass = (type) => {
    this.setState({ active: type });
  };

    render() {
      return ( 
        <div className="btn-group" role="group">
          <button type="button" className={`btn btn-secondary left ${cn({
        'active': this.state.active === 'left',
      })}`} onClick={()=> this.onChangeClass('left')}>Left</button>
          <button type="button" className={`btn btn-secondary right ${cn({
        'active': this.state.active === 'right',
      })}`} onClick={()=> this.onChangeClass('right')}>Right</button>
        </div>
      );
  }
}

export default BtnGroup;
