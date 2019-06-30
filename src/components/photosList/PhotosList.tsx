import React from 'react';
import { AutoSizer, List, Size, ListRowProps } from 'react-virtualized';
import Photo from '../photo/Photo';
import { IPhoto } from '../../interfaces/photo.interface';
import { PHOTO_LIST_ITEM_HEIGHT } from '../../constants';
import { Wrapper } from './styles';

function rowRenderer(items: IPhoto[], { key, index, style }: ListRowProps) {
  return (
    <div
      key={key}
      style={style}
    >
      <Photo
        key={items[index].id}
        photo={items[index]}
      />
    </div>
  );
}

const PhotosList: React.FC<Props> = (props: Props) => {
  const {
    photos,
  } = props;

  if (photos.length === 0) {
    return (
      <div>No photos found</div>
    );
  }

  return (
    <Wrapper>
      <AutoSizer>
        {({ height, width }: Size) => (
          <List
            height={height}
            rowCount={photos.length}
            rowHeight={PHOTO_LIST_ITEM_HEIGHT}
            rowRenderer={(...params) => rowRenderer(photos, ...params)}
            width={width}
          />
        )}
      </AutoSizer>
    </Wrapper>
  );
};

export default PhotosList;

export interface IStateProps {
  photos: IPhoto[];
}

export type Props = IStateProps;
