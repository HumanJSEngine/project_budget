import styled from 'styled-components';
import Container from '../styles/Container';
import Page from '../styles/Page';

const Post = () => {
  return (
    <Page>
      <Container>
        <PhotoArea></PhotoArea>
      </Container>
    </Page>
  );
};

const PhotoArea = styled.div``;

export default Post;
