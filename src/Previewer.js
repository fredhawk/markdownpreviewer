import React, { Component } from 'react';
import marked from 'marked';
import TextField from 'material-ui/TextField';
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
    return (
      <div>
        <section className="previewer">
          <article className="input">
            <TextField
              floatingLabelText="Write some markdown here."
              rows={2}
              rowsMax={30}
              onChange={this.handleUpdate}
              id="text-input"
            />
          </article>
          <article className="showcase">
            <Showcase output={this.state.result} />
          </article>
        </section>
      </div>
    );
  }
}

export default Previewer;