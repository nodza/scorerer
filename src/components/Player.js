import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Counter from './Counter';

class Player extends Component {


  render() {
    return (
      <div className="player">
        <Row>
          <Col span={8}>
            <div className="player-name">
              {this.props.name}
            </div>
          </Col>
          <Col span={8} offset={8}>
            <div className="player-score">
              <Counter score={this.props.score} onChange={this.props.onScoreChange} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
};

export default Player;
