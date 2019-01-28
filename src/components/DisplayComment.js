import React from 'react';
import Proptypes from 'prop-types';

import { instance } from '../utils/config';

/**
 *
 *
 * @class DisplayComment
 * @extends {React.Component}
 */
class DisplayComment extends React.Component {
  /**
   * Creates an instance of DisplayComment.
   *
   * @param {*} props
   * @memberof DisplayComment
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
   * @memberof DisplayComment
   */
  componentDidMount = () => {
    this.state.kids.forEach(id => {
      instance
        .get(`/item/${id}.json`)
        .then(response =>
          this.setState({ comments: [...this.state.comments, response.data] })
        )
        .catch(err => err);
    });
  };

  /**
   *
   *
   * @returns
   * @memberof DisplayComment
   */
  render() {
    return this.state.comments && this.state.comments.length > 0
      ? this.state.comments.map(comment => (
          <div className="parent-comment" key={comment.id}>
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
                <DisplayComment kids={comment.kids} />
              </div>
            ) : null}
          </div>
        ))
      : null;
  }
}
DisplayComment.propTypes = {
  kids: Proptypes.array.isRequired
};

export default DisplayComment;
