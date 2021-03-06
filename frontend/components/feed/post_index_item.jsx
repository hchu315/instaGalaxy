import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from './comment/comment_container'
import CommentIndexContainer from './comment/comment_index_container';
const Timestamp = require('react-timestamp');

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.deleteLike = this.props.deleteLike;
    this.createLike = this.props.createLike;
    this.createComment = this.props.createComment;
    this.handleBookmark = this.handleBookmark.bind(this);
    this.state = {
      isSelected: false
    }
  }

  handleLike() {
    if (this.props.post.liked) {
      this.deleteLike(this.props.post.id);
    } else {
      this.createLike(this.props.post.id);
    }
  }

  handleBookmark() {
    const isSelected = this.state.isSelected;
    this.setState({ isSelected: !isSelected });
  }

  render(){
    return (
    <section className="feed-scroll">
      <article className="post-item-container">
        <header className="post-header-container">
          <Link to={`/users/${this.props.userId}`}>
            <div className="author-profile-picture" />
          </Link>
            <Link className="users-link" to={`/users/${this.props.userId}`}>
          <div className="author-username">
            {this.props.post.author}
          </div>
          </Link>
        </header>
        <div className="post-img-container">
          <img className="post-img" src={this.props.post.photoUrl}/>
        </div>
        <div className="post-footer-container">
          <section className="post-icons-bar">
            <span className="like-icon" >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" className={ this.props.post.liked ? "feather-heart" : "feather" } onClick={ this.handleLike } ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </span>
            <span className="comment-icon">
            {/* <Link to={{
              pathname: `/posts/${this.props.post.id}`,
              state: {
                // test: 'yovibe'
                post: this.props.post,
                
              }
            }}> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            {/* </Link> */}
            </span>
            <span className="share-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </span>
            <span className="favorite-icon-container">
              <a>
                <div className={this.state.isSelected ? "favorite-icon-selected" : "favorite-icon"} onClick={this.handleBookmark} />
              </a>
            </span>
          </section>
          <section className="likes-count-container">
            <div className="likes-count"> { this.props.post.likesCount } { this.props.post.likesCount > 1 ? 'likes' : 'like' }</div>
          </section>
          <div className="comments-container">
            <ul className="poster-comment-container">
              <span className="poster-comment">
                <Link className="users-link" to={`/users/${this.props.userId}`}>
                  <span className="post-author">
                    {this.props.post.author}
                  </span>
                </Link>
                    {this.props.post.post_caption}
              </span>
              <li className='post-comments'>
                <CommentIndexContainer
                  postId={this.props.post.id}
                />
              </li>
            </ul>
          </div>
          <div className="time-of-post">
            <Timestamp time={this.props.post.created_at} actualSeconds format='date' />
          </div>
          <CommentContainer
            postId={this.props.post.id}
          />
        </div>
        <div className="misc-post-functions"></div>
      </article>
    </section>
  )}
}

export default PostIndexItem;
