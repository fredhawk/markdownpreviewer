import React, { Component } from 'react';
import marked from 'marked';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Showcase from './Showcase';

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ``
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate() {
    this.setState(prevState => ({
      result: marked(document.getElementById(`text-input`).value)
    }));
  }
  render() {
    const style = {
      previewer: {
        display: `flex`,
        justifyContent: `space-around`,
      },
      gridList: {
        width: `100%`
      },
      paper: {
        // height: 200
      }
    }
    return (
      <div>
        <section style={style.previewer} className="previewer">
          <GridList style={style.gridList}>
            <GridTile>
              <Paper zDepth={1} style={style.paper} className="input">
                <TextField
                  floatingLabelText="Write some markdown here."
                  rows={3}
                  rowsMax={10}
                  onChange={this.handleUpdate}
                  id="text-input"
                  multiLine
                />
              </Paper>
            </GridTile>
            <GridTile>
              <Paper zDepth={1} style={style.paper} className="showcase">
                <Showcase output={this.state.result} />
              </Paper>
            </GridTile>
          </GridList>
        </section>
      </div>
    );
  }
}

export default Previewer;