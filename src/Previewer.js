import React, { Component } from 'react';
import marked from 'marked';
import Showcase from './Showcase';

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: `Write some markdown here.`
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate() {
    this.setState(prevState => ({
      result: document.getElementById(`text-input`).value
    }));
  }
  render() {
    return (
      <div>
        <section className="previewer">
          <article className="input">
            <textarea name="input" onChange={this.handleUpdate} id="text-input" cols="30" rows="10" defaultValue={this.state.result} />
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