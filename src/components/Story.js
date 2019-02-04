import React from 'react';
import Proptypes from 'prop-types';

import Comment from './Comment';

/**
 *
 *
 * @class Story
 * @extends {React.Component}
 */
class Story extends React.Component {
  /**
   * Creates an instance of Story.
   *
   * @memberof Story
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
   * @memberof Story
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
   * @memberof Story
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
          <Comment kids={this.state.story.kids} />
        ) : null}
      </div>
    );
  }
}

Story.propTypes = {
  location: Proptypes.object
};

export default Story;
