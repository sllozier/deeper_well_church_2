import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "./authSlice";

const writerSlice = createSlice({
  name: "writerSlice",
  initialState: {
    writerList: [],
    writerData: {},
    postList: [],
    postData: {},
    tagList: [],
    tagData: {},
  },
  reducers: {
    getWriterList: (state, action) => {
      return action.payload;
    },
    getWriterData: (state, action) => {
      return action.payload;
    },
    _deleteWriter: (state, action) => {
      state.writerList = state.writerList.filter(
        (writer) => writer.id !== action.payload.id
      );
      return state;
    },
    getPostList: (state, action) => {
      state.postList = action.payload;
      return state;
    },
    getPostData: (state, action) => {
      state.postData = action.payload;
      return state;
    },
    _addPost: (state, action) => {
      state.postList.push(action.payload);
      return state;
    },
    _deletePost: (state, action) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload.id
      );
      return state;
    },
    getTagList: (state, action) => {
      state.tagList = action.payload;
      return state;
    },
    getTagData: (state, action) => {
      state.tagData = action.payload;
      return state;
    },
    _addTag: (state, action) => {
      state.tagList.push(action.payload);
      return state;
    },
    _deleteTag: (state, action) => {
      state.tagList = state.tagList.filter(
        (tag) => tag.id !== action.payload.id
      );
      return state;
    },
    setErrorMsg: (state, action) => {
      return action.payload;
    },
  },
});

export default writerSlice.reducer;
export const {
  getWriterList,
  getWriterData,
  getPostList,
  getPostData,
  getTagList,
  getTagData,
  _addTag,
  _addPost,
  _deleteWriter,
  _deletePost,
  _deleteTag,
  setErrorMsg,
} = writerSlice.actions;

//thunks go here
export const fetchWriterList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/writers");
    dispatch(getWriterList(data));
  } catch (error) {
    console.log("FETCH WRITERS ERROR", error);
  }
};

export const fetchWriterData = (writerId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get(`/api/writers/${writerId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(getWriterData(data));
  } catch (error) {
    console.log("FETCH WRITER DATA ERROR", error);
  }
};

export const updateWriterData = (writerInfo, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/api/writers/${writerId}`,
      writerInfo,
      writerId
    );
    dispatch(getWriterData(data));
  } catch (error) {
    console.log("UPDATE WRITER ERROR", error);
  }
};

export const deleteWriterData = (writerId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/writers/${writerId}`);
    dispatch(_deleteWriter(data));
    dispatch(logout());
  } catch (error) {
    console.log("DELETE WRITER ERROR", error);
  }
};

//Writer Posts

export const fetchPostList = (writerId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/writers/${writerId}/posts`, {});
    dispatch(getPostList(data));
  } catch (error) {
    console.log("FETCH WRITERS ERROR", error);
  }
};

export const fetchPostData = (writerId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/writers/${writerId}/posts/${postId}`,
      writerId,
      postId
    );
    dispatch(getPostData(data));
  } catch (error) {
    console.log("FETCH WRITERS ERROR", error);
  }
};

export const addPost = (newPost, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/writers/${writerId}/posts`,
      newPost
    );
    dispatch(_addPost(data));
  } catch (error) {
    console.log("FETCH WRITERS ERROR", error);
  }
};

export const updatePostData =
  (postInfo, writerId, postId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/writers/${writerId}/posts/${postId}`,
        postInfo,
        writerId,
        postId
      );
      dispatch(getPostData(data));
    } catch (error) {
      console.log("FETCH WRITERS ERROR", error);
    }
  };

export const deletePost = (writerId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/writers/${writerId}/posts/${postId}`
    );
    dispatch(_deletePost(data));
  } catch (error) {
    console.log("FETCH WRITERS ERROR", error);
  }
};

//Tags

export const fetchTagList = (writerId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/writers/${writerId}/posts/${postId}/tags`,
      writerId,
      postId
    );
    dispatch(getTagList(data));
  } catch (error) {
    console.log("", error);
  }
};

export const fetchTagData = (writerId, postId, tagId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/writers/${writerId}/posts/${postId}/tags/${tagId}`,
      writerId,
      postId,
      tagId
    );
    dispatch(getTagData(data));
  } catch (error) {
    console.log("", error);
  }
};

export const addTag = (newTag, writerId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/writers/${writerId}/posts/${postId}/tags`,
      newTag,
      writerId,
      postId
    );
    dispatch(_addTag(data));
  } catch (error) {
    console.log("", error);
  }
};

export const updateTag =
  (tagInfo, writerId, postId, tagId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/writers/${writerId}/posts/${postId}/tags/${tagId}`,
        tagInfo,
        writerId,
        postId,
        tagId
      );
      dispatch(getTagData(data));
    } catch (error) {
      console.log("", error);
    }
  };

export const deleteTag = (writerId, postId, tagId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/writers/${writerId}/posts/${postId}/tags/${tagId}`,
      writerId,
      postId,
      tagId
    );
    dispatch(_deleteTag(data));
  } catch (error) {
    console.log("", error);
  }
};
