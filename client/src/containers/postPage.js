import React, { Component } from 'react';
import Post from '../components/post';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPosts, deletePost } from '../actions/actions'
import Navbar from '../components/Navbar'


class PostPage extends Component{
    constructor(props){ 
        super()
            this.state = {
                posts: [],
            }
    }

    componentDidMount(){ 
        this.props.loadPosts();
       };

    handleDelete = post => { 
        this.props.deletePost(post)
    }

    render(){
        return(
            <div>
            <Navbar />

                {this.props.posts.map((post) => {
                     
                return (<Post post={post} key={post.id} handleDelete={this.handleDelete}/>)
                })}
            </div>
        )}
    };

    const mapStateToProps = (state) => { 
        return{ 
            posts: state.posts
        }
    }

    const mapDispatchToProps = (dispatch) => { 
        return bindActionCreators({ 
            loadPosts: loadPosts,
            deletePost: deletePost
        }, dispatch);
    }
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);