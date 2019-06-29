import { connect } from 'react-redux';
import { getPhotos } from './store/photos/actions';
import { IRootState } from './store';
import App, { IStateProps, IDispatchProps, IOwnProps } from './App';

const mapStateToProps = (states: IRootState): IStateProps => {
  return {
    photos: states.photos.list,
  };
};

const mapDispatchToProps = {
  getPhotos,
};

export default connect<IStateProps, IDispatchProps, IOwnProps, IRootState>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
