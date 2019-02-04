import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CONSTANTS } from '../constants/constants';
import { getStories, getItems } from '../utils/service';
/**
 *
 */
class StoryWrapper extends React.Component {
  /**
   * Creates an instance of StoryWrapper.
   *
   * @memberof StoryWrapper
   */
  constructor() {
    super();
    this.state = {
      storyIds: [],
      stories: [],
      storyIdsPerPage: [],
      buttonEnable: true,
      pageIndex: CONSTANTS.PAGE_INDEX,
      numberOfStoriesPerPage: CONSTANTS.NO_OF_STORIES_PER_PAGE
    };
  }

  /**
   *
   *
   * @memberof StoryWrapper
   */
  componentDidMount = async () => {
    const storyIds = await getStories(this.props.option);

    this.setState({ storyIds }, () =>
      this.setState(
        {
          storyIdsPerPage: this.state.storyIds.slice(
            this.state.pageIndex,
            this.state.numberOfStoriesPerPage
          )
        },
        () => this.fetchStories()
      )
    );
  };

  handlePreviousClick = () => {
    if (this.state.pageIndex !== 0) {
      this.setState({ pageIndex: this.state.pageIndex - 1 }, () =>
        this.setStories()
      );
    }
  };

  handleNextClick = () => {
    if (!(this.state.pageIndex > this.state.storyIds.length)) {
      this.setState({ pageIndex: this.state.pageIndex + 1 }, () =>
        this.setStories()
      );
    }
  };

  setStories = () => {
    this.setState(
      {
        stories: [],
        storyIdsPerPage: this.state.storyIds.slice(
          this.state.pageIndex * this.state.numberOfStoriesPerPage,
          (this.state.pageIndex + 1) * this.state.numberOfStoriesPerPage
        )
      },
      () => {
        this.fetchStories();
      }
    );
  };

  fetchStories = () => {
    this.state.storyIdsPerPage.forEach(async id => {
      const item = await getItems(id);

      this.setState({ stories: [...this.state.stories, item] });
    });
  };

  /**
   *
   *
   * @returns
   * @memberof StoryWrapper
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
          <span>{this.state.pageIndex + 1}</span>
          <button className="next" onClick={() => this.handleNextClick()}>
            Next
          </button>
        </div>
        <ul>
          {this.state.stories.map(story => (
            <li key={`${CONSTANTS.STORY}-${story.id}`}>
              <div className="story">
                <div className="title">
                  {story.url ? (
                    <a href={story.url}>{story.title}</a>
                  ) : (
                    <Link
                      to={{
                        pathname: `/${story.id}`,
                        state: { story }
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
                        state: { story }
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

StoryWrapper.propTypes = {
  option: Proptypes.string.isRequired
};

export default StoryWrapper;
