// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import '../App.css';
// import Navbar from "../components/Navbar";
// import { deletePost } from '../actions/actions';

// const mapStateToProps = (state, ownProps) => { 
//     return ({ 
//         post: state.posts.find(post => 
//         post.id === Number(ownProps.match.params.postId))
//     })
// }

// class PostShow extends Component{ 
//     render(){ 
//         const {post, history, match, deletePost} = this.props
//         return( 
//             <div className="App-header">
//             <h1> post: {post.title} </h1>
//         <Navbar /><br /><br /><br />
//         <div className="postShow">
//           <p> body: {post.body} </p>
//         <button
//              onClick={() => deletePost(post.id, history)}
//              > Delete post
//            </button>
//         </div>
//       </div>
//     )
//   }
// }


// export default connect(mapStateToProps, {deletePost})(PostShow);
