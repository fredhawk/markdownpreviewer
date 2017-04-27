import React, { Component } from 'react';
import marked from 'marked';
import Showcase from './Showcase';

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.setState({
      result: ``
    });
  }
  
  render() {
    return (
      <div>
        <section className="previewer">
          <article className="input">
            <textarea name="input" id="textinput" cols="30" rows="10">Write some markdown here.
            </textarea>
          </article>
          <article className="showcase">
            <Showcase />
          </article>
        </section>
      </div>
    );
  }
}

export default Previewer;