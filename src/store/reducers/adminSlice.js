import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";
const axios = require("axios");

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    adminList: [],
    adminData: {},
    userList: [],
    userData: {},
    writerList: [],
    writerData: {},
    postList: [],
    postData: {},
    writerPostList: [],
    writerPostData: {},
    productList: [],
    productData: {},
    orderList: [],
    orderData: {},
    eventList: [],
    eventData: {},
  },
  reducers: {
    getAdminList: (state, action) => {
      state.adminList = action.payload;
      return state;
    },
    getAdminData: (state, action) => {
      state.adminData = action.payload;
      return state;
    },
    _deleteAdminData: (state, action) => {
      state.adminList = state.adminList.filter(
        (admin) => admin.id !== action.payload.id
      );
      return state;
    },
    getUserList: (state, action) => {
      state.userList = action.payload;
      return state;
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
      return state;
    },
    _addUser: (state, action) => {
      state.userList.push(action.payload);
      return state;
    },
    _deleteUser: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
      return state;
    },
    getWriterList: (state, action) => {
      state.writerList = action.payload;
      return state;
    },
    getWriter: (state, action) => {
      state.writerData = action.payload;
      return state;
    },
    _addWriter: (state, action) => {
      state.writerList.push(action.payload);
      return state;
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
    getWriterPostList: (state, action) => {
      state.writerPostList = action.payload;
      return state;
    },
    getWriterPostData: (state, action) => {
      state.writerPostData = action.payload;
      return state;
    },
    _deleteWriterPost: (state, action) => {
      state.writerPostList = state.writerPostList.filter(
        (writerPost) => writerPost.id !== action.payload.id
      );
      return state;
    },
    getProductList: (state, action) => {
      state.productList = action.payload;
      return state;
    },
    getProductData: (state, action) => {
      state.productData = action.payload;
      return state;
    },
    _addProduct: (state, action) => {
      state.productList.push(action.payload);
      return state;
    },
    _deleteProduct: (state, action) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload.id
      );
      return state;
    },
    getOrderList: (state, action) => {
      state.orderList = action.payload;
      return state;
    },
    getOrderData: (state, action) => {
      state.orderData = action.payload;
      return state;
    },
    _addOrder: (state, action) => {
      state.orderList.push(action.payload);
      return state;
    },
    _deleteOrder: (state, action) => {
      state.orderList = state.orderList.filter(
        (order) => order.id !== action.payload.id
      );
      return state;
    },
    getEventList: (state, action) => {
      state.eventList = action.payload;
      return state;
    },
    getEventData: (state, action) => {
      state.eventData = action.payload;
      return state;
    },
    _addEvent: (state, action) => {
      state.eventList.push(action.payload);
      return state;
    },
    _deleteEvent: (state, action) => {
      state.eventList = state.eventList.filter(
        (event) => event.id !== action.payload.id
      );
      return state;
    },
    setErrorMsg: (state, action) => {
      return action.payload;
    },
  },
});

export default adminSlice.reducer;
export const {
  getAdminData,
  getAdminList,
  getWriterPostData,
  getWriterPostList,
  getOrderData,
  getOrderList,
  getPostData,
  getPostList,
  getProductData,
  getProductList,
  getUserData,
  getUserList,
  getWriterData,
  getWriterList,
  getEventData,
  getEventList,
  _deleteAdmin,
  _deleteWriterPost,
  _deleteOrder,
  _deletePost,
  _deleteProduct,
  _deleteUser,
  _deleteWriter,
  _deleteEvent,
  _addPost,
  _addProduct,
  _addOrder,
  _addUser,
  _addWriter,
  _addEvent,
  setErrorMsg,
} = adminSlice.actions;

//Admin Info

export const fetchAdminList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/admins");
    dispatch(getAdminList(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};
export const fetchAdminData = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(getAdminData(data));
  } catch (error) {
    console.log("FETCH ADMIN DATA ERROR", error);
  }
};

export const updateAdminData = (adminInfo, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/api/admins/${adminId}`,
      adminInfo,
      adminId
    );
    dispatch(getAdminData(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};

export const deleteAdminData = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/admins/${adminId}`);
    dispatch(_deleteAdmin(data));
    dispatch(logout());
  } catch (error) {
    console.log("FETCH ADMIN DATA ERROR", error);
  }
};

//Admin Posts
export const fetchPostList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/posts`, {});
    dispatch(getPostList(data));
  } catch (error) {
    console.log("FETCH POST LIST ERROR", error);
  }
};
export const fetchPostData = (adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/posts/${postId}`,
      adminId,
      postId
    );
    dispatch(getPostData(data));
  } catch (error) {
    console.log("FETCH POST DATA ERROR", error);
  }
};

export const updatePostData =
  (postInfo, adminId, postId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/posts/${postId}`,
        postInfo,
        adminId,
        postId
      );
      dispatch(getPostData(data));
    } catch (error) {
      console.log("UPDATE POST DATA ERROR", error);
    }
  };

export const addPost = (newPost, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/admins/${adminId}/posts`, newPost);
    dispatch(_addPost(data));
  } catch (error) {
    console.log("ADD POST ERROR", error);
  }
};

export const deletePostData = (adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/posts/${postId}`
    );
    dispatch(_deletePost(data));
  } catch (error) {
    console.log("DELETE POST DATA ERROR", error);
  }
};

//Writer Posts
export const fetchWriterPostList = (adminId, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/approvePosts}`,
      adminId,
      writerId
    );
    dispatch(getWriterPostList(data));
  } catch (error) {
    console.log("FETCH WRITER POST LIST ERROR", error);
  }
};

export const fetchWriterPostData = (adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/approvePosts/${postId}`,
      adminId,
      postId
    );
    dispatch(getWriterPostData(data));
  } catch (error) {
    console.log("FETCH WRITER POST DATA ERROR");
  }
};

export const updateWriterPostData =
  (postInfo, adminId, postId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/approvePosts/${postId}`,
        postInfo,
        adminId,
        postId
      );
      dispatch(getWriterPostData(data));
    } catch (error) {
      console.log("UPDATE WRITER POST ERROR", error);
    }
  };

export const deleteWriterPostData = (adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/approvePosts/${postId}`
    );
    dispatch(_deleteWriterPost(data));
  } catch (error) {
    console.log("DELETE WRITER POST ERROR", error);
  }
};

//Users
export const fetchUserList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/users`, {});
    dispatch(getUserList(data));
  } catch (error) {
    console.log("FETCH USER LIST ERROR", error);
  }
};
export const fetchUserData = (adminId, userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/users/${userId}`,
      adminId,
      userId
    );
    dispatch(getUserData(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};
export const updateUserData =
  (userInfo, adminId, userId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/users/${userId}`,
        userInfo,
        adminId,
        userId
      );
      dispatch(getUserData(data));
    } catch (error) {
      console.log("FETCH ADMIN LIST ERROR", error);
    }
  };

export const addUser = (newUser, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/admins/${adminId}/users`, newUser);
    dispatch(_addUser(data));
  } catch (error) {
    console.log("ADD WRITER ERROR", error);
  }
};
export const deleteUserData = (adminId, userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/users/${userId}`
    );
    dispatch(_deleteUser(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};

//Writers
export const fetchWriterList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/writers`, {});
    dispatch(getWriterList(data));
  } catch (error) {
    console.log("FETCH WRITER LIST ERROR", error);
  }
};
export const fetchWriterData = (adminId, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/writers/${writerId}`,
      adminId,
      writerId
    );
    dispatch(getWriterData(data));
  } catch (error) {
    console.log("FETCH WRITER DATA ERROR", error);
  }
};
export const updateWriterData =
  (writerInfo, adminId, writerId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/writers/${writerId}`,
        writerInfo,
        adminId,
        writerId
      );
      dispatch(getWriterData(data));
    } catch (error) {
      console.log("UPDATE WRITER DATA ERROR", error);
    }
  };
export const addWriter = (newWriter, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/admins/${adminId}/writers`,
      newWriter
    );
    dispatch(_addWriter(data));
  } catch (error) {
    console.log("ADD WRITER ERROR", error);
  }
};
export const deleteWriterData = (adminId, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/writers/${writerId}`
    );
    dispatch(_deleteWriter(data));
  } catch (error) {
    console.log("DELETE WRITER ERROR", error);
  }
};

//Products
export const fetchProductList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/products`, {});
    dispatch(getProductList(data));
  } catch (error) {
    console.log("FETCH PRODUCT LIST ERROR", error);
  }
};
export const fetchProductData = (adminId, productId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/products/${productId}`,
      adminId,
      productId
    );
    dispatch(getProductData(data));
  } catch (error) {
    console.log("FETCH PRODUCT DATA ERROR", error);
  }
};
export const updateProductData =
  (productInfo, adminId, productId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/products/${productId}`,
        productInfo,
        adminId,
        productId
      );
      dispatch(getProductData(data));
    } catch (error) {
      console.log("UPDATE PRODUCT ERROR", error);
    }
  };

export const addProduct = (newProduct, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/admins/${adminId}/products`,
      newProduct,
      adminId
    );
    dispatch(_addProduct(data));
  } catch (error) {
    console.log("ADD PRODUCT ERROR", error);
  }
};
export const deleteProductData = (adminId, productId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/products/${productId}`
    );
    dispatch(_deleteProduct(data));
  } catch (error) {
    console.log("DELETE PRODUCT ERROR", error);
  }
};

//Orders
export const fetchOrderList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/orders`, {});
    dispatch(getOrderList(data));
  } catch (error) {
    console.log("FETCH ORDER LIST ERROR", error);
  }
};
export const fetchOrderData = (adminId, orderId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/orders/${orderId}`,
      adminId
    );
    dispatch(getOrderData(data));
  } catch (error) {
    console.log("FETCH ORDER DATA ERROR", error);
  }
};
export const updateOrderData =
  (orderInfo, adminId, orderId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/orders/${orderId}`,
        orderInfo,
        adminId,
        orderId
      );
      dispatch(getOrderData(data));
    } catch (error) {
      console.log("UPDATE ORDER ERROR", error);
    }
  };
export const addOrder = (newOrder, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/admins/${adminId}/orders`,
      newOrder,
      adminId
    );
    dispatch(_addOrder(data));
  } catch (error) {
    console.log("ADD ORDER ERROR", error);
  }
};
export const deleteOrderData = (adminId, orderId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/orders/${orderId}`
    );
    dispatch(_deleteOrder(data));
  } catch (error) {
    console.log("DELETE ORDER ERROR", error);
  }
};

//Events

export const fetchEventList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/events`, {});
    dispatch(getEventList(data));
  } catch (error) {
    console.log("FETCH ORDER LIST ERROR", error);
  }
};
export const fetchEventData = (adminId, eventId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/events/${eventId}`,
      adminId
    );
    dispatch(getEventData(data));
  } catch (error) {
    console.log("FETCH ORDER DATA ERROR", error);
  }
};
export const updateEventData =
  (eventInfo, adminId, eventId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/events/${eventId}`,
        eventInfo,
        adminId,
        eventId
      );
      dispatch(getEventData(data));
    } catch (error) {
      console.log("UPDATE ORDER ERROR", error);
    }
  };
export const addEvent = (newEvent, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/admins/${adminId}/events`,
      newEvent,
      adminId
    );
    dispatch(_addEvent(data));
  } catch (error) {
    console.log("ADD ORDER ERROR", error);
  }
};
export const deleteEventData = (adminId, eventId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/events/${eventId}`
    );
    dispatch(_deleteEvent(data));
  } catch (error) {
    console.log("DELETE ORDER ERROR", error);
  }
};

// import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

// const adminSlice = createSlice({
//     name: "adminSlice",
//     initialState: {
//         adminList: [],
//         adminData: {},
//         userList: [],
//         userData: {},
//         productList: [],
//         productData:{},
//         orderList: [],
//         orderData: {},
//     },
//     reducers: {
//         getAdminList: (state, action) => {
//             state.adminList = action.payload;
//             return state;
//         },
//         getAdminData: (state, action) => {
//             state.adminData = action.payload;
//             return state;
//         },
//         _deleteAdmin: (state, action) => {
//             state.adminList = state.adminList.filter((admin) =>
//             admin.id !== action.payload.id
//             );
//             return state;
//         },
//         getUserList: (state, action) => {
//             state.userList = action.payload;
//             return state;
//         },
//         getUserData: (state, action) => {
//             state.userData = action.payload;
//             return state;
//         },
//         _deleteUser: (state, action) => {
//             state.userList = state.userList.filter((user) =>
//             user.id !== action.payload.id
//             );
//             return state;
//         },
//         getProductList: (state, action) => {
//             state.productList = action.payload;
//             return state;
//         },
//         getProductData: (state, action) => {
//             state.productData = action.payload;
//             return state;
//         },
//         _addProduct: (state, action) => {
//             state.productList.push(action.payload);
//             return state;
//         },
//         _deleteProduct: (state, action) => {
//             state.productList = state.productList.filter((product) =>
//             product.id !== action.payload.id
//             );
//             return state;
//         },
//         getOrderList: (state, action) => {
//             state.orderList = action.payload;
//             return state;
//         },
//         getOrderData: (state, action) => {
//             state.orderData = action.payload;
//             return state;
//         },
//         _addOrder: (state, action ) => {
//             state.orderList.push(action.payload);
//             return state;
//         },
//         _deleteOrder: (state, action) => {
//             state.orderList = state.orderList.filter((order) =>
//             order.id !== action.payload.id
//             );
//             return state;
//         },
//         setErrorMsg: (state, action) => {
//             state.errorMsg = action.payload;
//             return state;
//         },
//     },
// });

// export default adminSlice.reducer;
// export const {
//     getAdminList,
//     getAdminData,
//     _deleteAdmin,
//     getUserList,
//     getUserData,
//     _deleteUser,
//     getProductList,
//     getProductData,
//     _addProduct,
//     _deleteProduct,
//     getOrderList,
//     getOrderData,
//     _addOrder,
//     _deleteOrder,
//     setErrorMsg,
// } = adminSlice.actions;

// //thunks go here//

// export const fetchAdmins = () => async(dispatch) => {
//     try{
//         const { data: adminList } = await axios.get("/api/admin");
//         dispatch(getAdminList(adminList));
//     }catch(error){
//         console.log('FETCH ADMINS ERROR', error);
//     }
// };

// export const fetchAdminData = (adminId) => async(dispatch) => {
//     try{
//         const token = window.localStorage.getItem("token");
//         const { data: adminData } = await axios.get(`/api/admin/${adminId}`, {
//             headers: {
//                 authorization: token
//             },
//         });
//         dispatch(getAdminData(adminData));
//     }catch(error){
//         console.log("FETCH ADMIN DATA ERROR", error);
//     }
// };

// export const deleteAdmin = (adminId) => async(dispatch) => {
//     try{
//         const { data: deletedAdmin } = await axios.delete(`/api/admin/${adminId}`);
//         dispatch(_deleteAdmin(deletedAdmin));
//         dispatch(logout());
//     }catch(error){
//         console.log("DELETE ADMIN ERROR", error);
//     }
// };

// export const updateAdminData = (updatedAdmin, adminId) => async(dispatch) => {
//     try{
//         const { data: updatedAdminData } = await axios.put(`/api/admin/${adminId}`, updatedAdmin);
//         dispatch(getAdminData(updatedAdminData));
//     }catch(error){
//         console.log("UPDATE ADMIN ERROR", error);
//     }
// };

// export const fetchUsers = (adminId) => async(dispatch) => {
//     try{
//         const { data: userList } = await axios.get(`/api/admin/${adminId}/users`);
//         dispatch(getUserList(userList));
//     }catch(error){
//         console.log("FETCH USERS ERROR", error);
//     }
// };

// export const fetchUserData = (adminId, userId) => async(dispatch) => {
//     try{
//         const { data: userData } = await axios.get(`/api/admin/${adminId}/users/${userId}`, adminId, userId);
//         dispatch(getUserData(userData));
//     }catch(error){
//         console.log("FETCH USER DATA ERROR", error);
//     }
// };

// export const deleteUser = (userId) => async(dispatch) => {
//     try{
//         const { data: deletedUser } = await axios.delete(`/api/admin/:id/users/${userId}`);
//         dispatch(_deleteUser(deletedUser));
//     }catch(error){
//         console.log("DELETE USER ERROR", error);
//     }
// };

// export const updateUserData = (updatedUser, adminId, userId) => async(dispatch) => {
//     try{
//         const { data: updatedUserData } = await axios.put(`/api/admin/${adminId}/users/${userId}`, updatedUser, adminId, userId);
//         dispatch(getUserData(updatedUserData));
//     }catch(error){
//         console.log("UPDATE USER ERROR", error);
//     }
// };

// export const fetchProducts = (adminId) => async(dispatch) => {
//     try{
//         const { data: productList } = await axios.get(`/api/admin/${adminId}/products`);
//         dispatch(getProductList(productList));
//     }catch(error){
//         console.log("FETCH PRODUCTS ERROR", error);
//     }
// };

// export const fetchProductData = (adminId, productId) => async(dispatch) => {
//     try{
//         const { data: productData } = await axios.get(`/api/admin/${adminId}/products/${productId}`, adminId, productId);
//         dispatch(getProductData(productData));
//     }catch(error){
//         console.log("FETCH PRODUCT DATA ERROR", error);
//     }
// };

// export const addProduct = (newProduct, adminId) => async(dispatch) => {
//     try{
//         const { data: newProductData } = await axios.post(`/api/admin/${adminId}/products`, newProduct);
//         dispatch(_addProduct(newProductData));
//     }catch(error){
//         console.log("ADD PRODUCT ERROR", error);
//     }
// };

// export const deleteProduct = (productId) => async(dispatch) => {
//     try{
//         const { data: deletedProduct } = await axios.delete(`/api/admin/:id/products/${productId}`);
//         dispatch(_deleteProduct(deletedProduct));
//     }catch(error){
//         console.log("DELETE PRODUCT ERROR", error);
//     }
// };

// export const updateProductData = (updatedProduct, adminId, productId) => async(dispatch) => {
//     try{
//         const { data: updatedProductData } = await axios.put(`/api/admin/${adminId}/products/${productId}`, updatedProduct, adminId, productId);
//         dispatch(getProductData(updatedProductData));
//     }catch(error){
//         console.log("UPDATE PRODUCT ERROR", error);
//     }
// };

// export const fetchOrders = (adminId) => async(dispatch) => {
//     try{
//         const { data: orderList } = await axios.get(`/api/admin/${adminId}/orders`);
//         dispatch(getOrderList(orderList));
//     }catch(error){
//         console.log("FETCH ORDERS ERROR", error);
//     }
// };

// export const fetchOrderData = (adminId, orderId) => async(dispatch) => {
//     try{
//         const { data: orderData } = await axios.get(`/api/admin/${adminId}/orders/${orderId}`, adminId, orderId);
//         dispatch(getOrderData(orderData));
//     }catch(error){
//         console.log("FETCH ORDER DATA ERROR", error);
//     }
// };

// export const addOrder = (newOrder, adminId) => async(dispatch) => {
//     try{
//         const { data: newOrderData } = await axios.post(`/api/admin/${adminId}/orders`, newOrder);
//         dispatch(_addOrder(newOrderData));
//     }catch(error){
//         console.log("ADD ORDER ERROR", error);
//     }
// };

// export const deleteOrder = (orderId) => async(dispatch) => {
//     try{
//         const { data: deletedOrder } = await axios.delete(`/api/admin/:id/orders/${orderId}`);
//         dispatch(_deleteOrder(deletedOrder));
//     }catch(error){
//         console.log("DELETE ORDER ERROR", error);
//     }
// };

// export const updateOrderData = (updatedOrder, adminId, orderId) => async(dispatch) => {
//     try{
//         const { data: updatedOrderData } = await axios.put(`/api/admin/${adminId}/orders/${orderId}`, updatedOrder, adminId, orderId);
//         dispatch(getOrderData(updatedOrderData));
//     }catch(error){
//         console.log("UPDATE ORDER ERROR", error);
//     }
// };
