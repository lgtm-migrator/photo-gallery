import React from 'react';
import { IPhoto } from '../../interfaces/photo.interface';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Ellipsis from '../ellipsis/Ellipsis';
import { Wrapper, Title } from './styles';

const Photo: React.FC<Props> = (props) => {
  const {
    photo,
  } = props;
  return (
    <Wrapper>
      <Container>
        <Media>
          <img src={photo.thumbnailUrl} />
          <Media.Body className="align-self-center overflow-hidden">
            <Title>
              <Ellipsis>
                <span title={photo.title}>
                  {photo.title}
                </span>
              </Ellipsis>
            </Title>
          </Media.Body>
        </Media>
      </Container>
    </Wrapper>
  );
};

export default Photo;

export interface IStateProps {
  photo: IPhoto;
}

export type Props = IStateProps;
