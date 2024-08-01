import { Component } from "react";
import { Howl, Howler } from 'howler';
import ReactHowler from 'react-howler';


class PlayCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playing: false,
      };
      this.togglePlayPlay = this.togglePlay.bind(this)
    }
    
    togglePlay = () => {
      this.setState({ playing: !this.state.playing });
    };
  
    render() {
      return (
        <div className="right-panel-playcard">
          <ReactHowler
            src='./songs/mix_bankai.mp3'
            playing={this.state.playing}
            
          />
          <button onClick={this.togglePlay}>
            {this.state.playing ? 'Pause' : 'Play'}
          </button>
          
        </div>
      );
    }
  }
export default PlayCard;