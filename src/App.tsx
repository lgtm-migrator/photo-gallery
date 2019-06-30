import React, { useEffect, useCallback } from 'react';
import './App.css';
import PhotosList from './components/photosList/PhotosList';
import { IPhoto } from './interfaces/photo.interface';
import 'react-virtualized/styles.css';

const App: React.FC<Props> = (props) => {
  const {
    getPhotos,
    photos,
  } = props;
  const getPhotosMemoized = useCallback(
    getPhotos,
    [],
  );
  useEffect(() => { getPhotosMemoized(); }, [getPhotosMemoized]);

  return (
    <div className="App">
      <PhotosList
        photos={photos}
      />
    </div>
  );
};

export default App;

export interface IDispatchProps {
  getPhotos: () => void;
}

export interface IOwnProps {
}

export interface IStateProps {
  photos: IPhoto[];
}

export type Props = IStateProps & IDispatchProps;
