import React from 'react';
import Proptypes from 'prop-types';

import { getItems } from '../utils/service';
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
   * @param {*} props
   * @memberof Comment
   */
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      kids: props.kids
    };
  }

  /**
   *
   *
   * @memberof Comment
   */
  componentDidMount = () => {
    this.state.kids.forEach(async id => {
      const item = await getItems(id);

      this.setState({ comments: [...this.state.comments, item] });
    });
  };

  /**
   *
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
