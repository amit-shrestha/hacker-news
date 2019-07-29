import React from 'react';
import Proptypes from 'prop-types';

import Comment from './Comment';

/**
 * Returns Story Content.
 *
 * @param {Object} props
 */
const Story = props => {
  return (
    <div className="story-div">
      <h2>{props.location.state.story.title}</h2>
      {props.location.state.story.text ? (
        <div
          className="story-text"
          dangerouslySetInnerHTML={{
            __html: props.location.state.story.text
          }}
        />
      ) : null}
      {props.location.state.story.kids &&
      props.location.state.story.kids.length > 0 ? (
        <Comment kids={props.location.state.story.kids} />
      ) : null}
    </div>
  );
};

Story.propTypes = {
  location: Proptypes.object
};

export default Story;
