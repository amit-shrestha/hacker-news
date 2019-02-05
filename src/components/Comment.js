import React from 'react';
import Proptypes from 'prop-types';

import { getItem } from '../services/service';
import { CONSTANTS } from '../constants/constants';
/**
 *
 *
 * @class Comment
 * @extends {React.Component}
 */
class Comment extends React.Component {
  /**
   * Creates an instance of Comment.
   *
   * @memberof Comment
   */
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  /**
   * Set comments in the state.
   *
   * @memberof Comment
   */
  componentDidMount = () => {
    let comments = [];

    Promise.all(
      (comments = this.props.kids.map(async id => {
        const item = await getItem(id);

        return item;
      }))
    ).then(comments => this.setState({ comments }));
  };

  /**
   *  Renders comments.
   *
   * @returns
   * @memberof Comment
   */
  render() {
    return this.state.comments && this.state.comments.length > 0
      ? this.state.comments.map(comment => (
          <div
            className="parent-comment"
            key={`${CONSTANTS.COMMENT}-${comment.id}`}
          >
            {comment.deleted ? (
              '*comment deleted*'
            ) : (
              <div className="comment">
                <div
                  className="comment-text"
                  dangerouslySetInnerHTML={{ __html: comment.text }}
                />
                <div className="comment-by">-{comment.by}</div>
              </div>
            )}

            {comment.kids ? (
              <div className="child-comment">
                <Comment kids={comment.kids} />
              </div>
            ) : null}
          </div>
        ))
      : null;
  }
}
Comment.propTypes = {
  kids: Proptypes.array.isRequired
};

export default Comment;
