
"use client"
import React, { useState, useEffect } from 'react';
import '@utils/infiniteScroll.css'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

type Image = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  }
};
const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);

  const fetchImages = () => {
    const accessKey = process.env.YOUR_UNSPLASH_ACCESS_KEY;
    const perPage = 10;

    axios
      .get(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`)
      .then((response) => {
        setImages([...images, ...response.data]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []); // Initial fetch when the component mounts

  return (
    <section className='flex flex-col justify-center'>
      <h1 className='font-mono lg:text-6xl font-bold flex justify-center '>Infinite Scrolling Gallery</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="gallery ">
          {images.map((image) => (
            <div className='flex flex-col justify-center p-2 '>
              <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
              <h3 className='md:text-3xl'>{image.alt_description}</h3>
            </div>

          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default Gallery;
