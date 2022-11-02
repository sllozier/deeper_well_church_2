import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlbumsThunk } from '../../store/reducers1/albumReducer';
import { Link } from 'react-router-dom';



const ViewAllAlbums = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const allAlbums = useSelector((state) => state.albums);
  AOS.init()

  // dispatch thunk to get all albums
  useEffect(() => {
    dispatch(setAlbumsThunk());
  }, [dispatch]);

  // check if data has loaded
  useEffect(() => {
    if (allAlbums.length > 0) {
      setLoading(false);
    }
  }, [allAlbums]);

  return loading ? (
    <div>Albums loading...</div>
  ) : (
    <>
      {/* <h1 className='landing-header'>Welcome to Flintstones Album Collective</h1> */}
      <div className='landing-container'>
        <img src='https://wallpaper.dog/large/5447354.jpg' />
        <h1>All Products</h1>
        <div className='all-product-container'>
          {allAlbums.map((album) => (
            <div key={album.id} >
              <Link id='link-style' to={'/products/' + album.id}>
                <img
                  className="albumArt"
                  data-aos="flip-up"
                  delay="2000"
                  src={album.image}
                  alt=""
                />
                <div>
                  <h4>{album.title}</h4>
                  <p >${album.price}</p>
                  <p>{album.stock} left in store</p>
                </div>
              </Link>
              {/* <button>Add to Cart</button> */}
            </div>
          ))}
        </div>
      </div>
     
    </>
  );
}
export default ViewAllAlbums;
