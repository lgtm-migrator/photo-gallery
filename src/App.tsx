import React, { useEffect, useCallback } from 'react';
// import Button from 'react-bootstrap/Button';
// import logo from './logo.svg';
import './App.css';
import PhotosList from './components/photosList/PhotosList';
import { IPhoto } from './interfaces/photo.interface';

const App: React.FC<Props> = (props) => {
  const {
    getPhotos,
  } = props;
  const getPhotosMemoized = useCallback(
    getPhotos,
    [],
  );
  useEffect(() => { getPhotosMemoized(); }, [getPhotosMemoized]);

  console.log('=-= props', props)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Test bootstrap</Button>
      </header> */}
      <PhotosList/>
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
