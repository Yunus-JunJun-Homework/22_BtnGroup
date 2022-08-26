import React from "react";
import cn from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  onChangeClass = (type) => () => {
    this.setState({active: type});
  };

  onChangeLeft = this.onChangeClass('left');
  onChangeRight = this.onChangeClass('right');

  render() {
    const leftBtn = cn({'active': this.state.active === 'left'});
    const rightBtn = cn({'active': this.state.active === 'right'});

    return (
      <div className="btn-group" role="group">
        <button type="button" className={`btn btn-secondary left ${leftBtn}`}
                onClick={this.onChangeLeft}>Left
        </button>
        <button type="button" className={`btn btn-secondary right ${rightBtn}`}
                onClick={this.onChangeRight}>Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
