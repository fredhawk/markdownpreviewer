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
    }
    return (
      <div>
        <section style={style.previewer} className="previewer">
          <GridList
            style={style.gridList}
            cols={2}
            padding={20}
            cellHeight={`auto`}
          >
            <GridTile>
              <Paper zDepth={1} className="input">
                <TextField
                  floatingLabelText="Write some markdown here."
                  rows={3}
                  rowsMax={20}
                  onChange={this.handleUpdate}
                  id="text-input"
                  multiLine
                  fullWidth
                />
              </Paper>
            </GridTile>
            <GridTile>
              <Paper zDepth={1} className="showcase">
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