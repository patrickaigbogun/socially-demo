import React, { Component } from 'react';

import axios from '../../../axios';
import VolumeSider from './volumeSider';

class VolumeControl extends Component {
  state = {
    volume: 1,
    previous: 1,
    clicked: false
  };

  changeVolume = value => {
    axios.put(`/me/player/volume?volume_percent=${Math.round(value * 100)}`);
  };

  onOff = () => {
    this.setState(prevState => {
      this.setState({ volume: 0, previous: prevState.volume, clicked: true });
      this.changeVolume(0);
    });
  };

  onOn = () => {
    this.setState(prevState => {
      this.setState({ volume: prevState.previous, clicked: false });
      this.changeVolume(this.state.volume);
    });
  };

  onClick = () => {
    if (!this.state.clicked) {
      this.onOff();
    } else {
      if (this.state.volume === 0) {
        this.onOn();
      } else {
        this.setState({ clicked: false });
      }
    }
  };

  render = () => (
    <div className="volume-control-container">
      <i className="fa fa-desktop" />
      <VolumeSider
        value={this.state.volume}
        onClick={this.onClick}
        onChange={value => {
          this.setState({ volume: value });
          this.changeVolume(value);
        }}
      />
    </div>
  );
}

export default VolumeControl;
