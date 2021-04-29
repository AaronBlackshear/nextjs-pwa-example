import styled from "styled-components";

const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((3 / 4) * 100%);
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Image({ ...props }) {
  return (
    <StyledImage>
      <img {...props} />
    </StyledImage>
  );
}
