import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import Tiles from './Tiles';

const About = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'images'));
        const imageURLs = querySnapshot.docs.map(doc => doc.data().url);
        setImages(imageURLs);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>About</h1>
      <Tiles images={images} />
    </div>
  );
};

export default About;
