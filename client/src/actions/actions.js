//** action creators */

export function setPost(posts){ 
    return { 
        type: "GET_POST_SUCCESS", 
        posts
    };
};

export function addPost(post){ 
    return{ 
        type: "CREATE_POST_SUCCESS",
        post
    };
};

export const removePost = (id) => { 
    return{ 
        type:"REMOVE_POST", 
        id
    }
}

//**async actions */


export function loadPosts(posts){ 
    return dispatch => { 
        return fetch('http://localhost:3001/api/v1/posts.json')
        .then(response => response.json())
        .then(posts => dispatch(setPost(posts)))
        .catch(error => console.log(error))
        }
    }


export function createPost(post){ 
    return(dispatch) => { 
        return fetch('http://localhost:3001/api/v1/posts',
    {method: 'POST',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({post: post})})
    .then(response => response.json())
    .then(post => dispatch(addPost(post)))
    }
};

export const deletePost = post => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/posts/${post.id}`, {
        method: 'DELETE'
    })
    .then(res => {
      dispatch(removePost(post.id))
    })
    .catch(error => console.log(error))
  }
};
