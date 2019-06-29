import React from 'react';
import Photo from '../photo/Photo';
// import logo from './logo.svg';
// import './App.css';

const PhotosList: React.FC = () => {
  return (
    <div className="photos-list">
      PhotosList
      <Photo/>
      <Photo/>
      <Photo/>
      <Photo/>
    </div>
  );
};

export default PhotosList;
