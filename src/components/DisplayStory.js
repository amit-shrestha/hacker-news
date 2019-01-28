import React from 'react';
import Proptypes from 'prop-types';

import DisplayComment from './DisplayComment';

/**
 *
 *
 * @class DisplayStory
 * @extends {React.Component}
 */
class DisplayStory extends React.Component {
  /**
   * Creates an instance of DisplayStory.
   *
   * @memberof DisplayStory
   */
  constructor() {
    super();
    this.state = {
      story: []
    };
  }

  /**
   *
   *
   * @memberof DisplayStory
   */
  componentDidMount() {
    this.setState({
      story: this.props.location.state.story
    });
  }
  /**
   *
   *
   * @returns
   * @memberof DisplayStory
   */
  render() {
    return (
      <div className="story-div">
        <h2>{this.state.story.title}</h2>
        {this.state.story.text ? (
          <div
            className="story-text"
            dangerouslySetInnerHTML={{ __html: this.state.story.text }}
          />
        ) : null}
        {this.state.story.kids && this.state.story.kids.length > 0 ? (
          <DisplayComment kids={this.state.story.kids} />
        ) : null}
      </div>
    );
  }
}

DisplayStory.propTypes = {
  location: Proptypes.object
};

export default DisplayStory;
