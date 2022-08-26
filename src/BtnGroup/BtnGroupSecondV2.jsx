import React from 'react';
import cn from 'classnames';

class BtnGroupSecondV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  onChangeLeft = () => this.setState(({isActive: 'left'}));
  onChangeRight = () => this.setState(({isActive: 'right'}));

  render() {
    const leftBtnClass = cn({
      'active': this.state.isActive === 'left',
    })
    const rightBtnClass = cn({
      'active': this.state.isActive === 'right',
    })

    return (
      <div className="btn-group" role="group">
        <button type="button" className={`btn btn-secondary left ${leftBtnClass}`}
                onClick={this.onChangeLeft}>Left
        </button>
        <button type="button" className={`btn btn-secondary right ${rightBtnClass}`}
                onClick={this.onChangeRight}>Right
        </button>
      </div>
    );
  }
}


export default BtnGroupSecondV2;