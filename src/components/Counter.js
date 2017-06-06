import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'antd';

const Counter = props => (
  <div className="counter">
    <Row type="flex" justify="space-around">
      <Col span={4}>
        <Button type="primary" onClick={(() => { props.onChange(-1); })}> - </Button>
      </Col>
      <Col span={4}><div className="counter-score">{props.score}</div></Col>
      <Col span={4}>
        <Button type="primary" onClick={(() => { props.onChange(+1); })}> + </Button>
      </Col>
    </Row>
  </div>
);

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Counter;
