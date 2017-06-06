import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { PLAYERS: this.props.initialPlayers };
  }

  onScoreChange(index, delta) {
    this.state.PLAYERS[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    console.log('Player: ', name);
  }

  render() {
    return (
      <div className="App">
        <div style={{ background: '#ECECEC', padding: '15px' }}>
          <Row className="header-wrapper">
            <Col span={6} offset={6}>
              <Header title="Scorerer" />
            </Col>
            <Col span={6} offset={1}>
              <AddPlayerForm onAdd={this.onPlayerAdd} />
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <Card title="Players" bordered={false} style={{ width: 600 }}>
                <div className="players">
                  {this.props.initialPlayers.map((player, index) => <Player onScoreChange={((delta) => { this.onScoreChange(index, delta); })} key={player.id} name={player.name} score={player.score} />)}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
