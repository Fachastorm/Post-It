export default function postsReducer(state = [], action){ 
    switch(action.type) { 
        case 'GET_POST_SUCCESS':
            return action.posts;

        case 'CREATE_POST_SUCCESS':
        return[...state, action.post];

        case "REMOVE_POST": 
            return state.filter(post => post.id !== action.id)
        default: 
        return state;
    }
}