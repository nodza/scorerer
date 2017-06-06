import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

Header.defaultProps = {
  title: 'Scorerer',
};

export default Header;
