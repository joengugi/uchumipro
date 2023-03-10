import {CREATE, UPDATE, DELETE, FETCH_ALL, LIKE} from "../actionTypes/ActionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action ) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    
    case CREATE:
      return [...posts, action.payload ];

    case UPDATE:
    case LIKE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);

    case DELETE:
      return posts.filter((post) => post !== action.payload._id);

    
    default:
      return posts;
  }
}