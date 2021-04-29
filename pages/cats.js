import Head from "next/head";
import styled from "styled-components";
import Image from "../components/Image";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: row dense;
  max-width: 800px;
  margin: 3rem 0;
  width: 100%;
`;

export default function cats() {
  return (
    <>
      <Head>
        <title>Cats</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to the Cats Page!</StyledTitle>

        <StyledDescription>
          Get started by browsing pictures of cats.
        </StyledDescription>

        <StyledImageGrid>
          <Image src="/images/cat1.jpg" />
          <Image src="/images/cat2.jpg" />
          <Image src="/images/cat3.jpg" />
          <Image src="/images/cat4.jpg" />
          <Image src="/images/cat5.jpg" />
          <Image src="/images/cat6.jpg" />
          <Image src="/images/cat7.jpg" />
          <Image src="/images/cat8.jpg" />
          <Image src="/images/cat9.jpg" />
          <Image src="/images/cat10.jpg" />
        </StyledImageGrid>
      </StyledMain>
    </>
  );
}
