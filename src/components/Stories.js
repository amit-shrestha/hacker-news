import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import { instance } from '../utils/config';
import { CONSTANTS } from '../constants/constants';
/**
 *
 */
class Stories extends React.Component {
  /**
   * Creates an instance of Stories.
   *
   * @memberof Stories
   */
  constructor() {
    super();
    this.pageIndex = CONSTANTS.pageIndex;
    this.numberOfStoriesPerPage = CONSTANTS.numberOfStoriesPerPage;
    this.state = {
      storyIds: [],
      stories: [],
      storyIdsPerPage: [],
      buttonEnable: true
    };
  }

  /**
   *
   *
   * @memberof Stories
   */
  componentDidMount() {
    instance
      .get(`/${this.props.option}.json`)
      .then(response => {
        this.setState(
          {
            storyIds: response.data
          },
          () =>
            this.setState(
              {
                storyIdsPerPage: this.state.storyIds.slice(
                  this.pageIndex,
                  this.numberOfStoriesPerPage
                )
              },
              () => this.fetchStories()
            )
        );
      })
      .catch(err => err);
  }

  handlePreviousClick = () => {
    if (this.pageIndex !== 0) {
      this.pageIndex = this.pageIndex - 1;
      this.setStories();
    }
  };

  handleNextClick = () => {
    if (!(this.pageIndex > this.state.storyIds.length)) {
      this.pageIndex = this.pageIndex + 1;
      this.setStories();
    }
  };

  setStories = () => {
    this.setState(
      {
        stories: [],
        storyIdsPerPage: this.state.storyIds.slice(
          this.pageIndex * this.numberOfStoriesPerPage,
          (this.pageIndex + 1) * this.numberOfStoriesPerPage
        )
      },
      () => {
        this.fetchStories();
      }
    );
  };

  fetchStories = () => {
    this.state.storyIdsPerPage.map(id =>
      instance
        .get(`/item/${id}.json`)
        .then(response =>
          this.setState({ stories: [...this.state.stories, response.data] })
        )
        .catch(err => err)
    );
  };

  /**
   *
   *
   * @returns
   * @memberof Stories
   */
  render() {
    return (
      <div className="stories">
        <div className="pagination">
          <button
            className="previous"
            onClick={() => this.handlePreviousClick()}
          >
            Previous
          </button>
          <span>{this.pageIndex + 1}</span>
          <button className="next" onClick={() => this.handleNextClick()}>
            Next
          </button>
        </div>
        <ul>
          {this.state.stories.map(story => (
            <li key={story.id}>
              <div className="story">
                <div className="title">
                  {story.url ? (
                    <a href={story.url}>{story.title}</a>
                  ) : (
                    <Link
                      to={{
                        pathname: `/${story.id}`,
                        state: { story: story }
                      }}
                    >
                      {story.title}
                    </Link>
                  )}
                </div>

                <div className="info">
                  <span className="by">-{story.by}</span>
                  <span className="score">Score: {story.score}</span>
                  {story.descendants ? (
                    <Link
                      to={{
                        pathname: `/${story.id}`,
                        state: { story: story }
                      }}
                    >
                      <span className="comments-count">
                        {story.descendants} Comments
                      </span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Stories.propTypes = {
  option: Proptypes.string.isRequired
};

export default Stories;
