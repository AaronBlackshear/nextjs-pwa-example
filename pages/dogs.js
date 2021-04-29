import Head from "next/head";
import Image from "../components/Image";
import { StyledImageGrid } from "./cats";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export default function dogs() {
  return (
    <>
      <Head>
        <title>Dogs</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to the Dogs Page!</StyledTitle>

        <StyledDescription>
          Get started by browsing pictures of dogs.
        </StyledDescription>

        <StyledImageGrid>
          <Image src="/images/dog1.jpg" />
          <Image src="/images/dog2.jpg" />
          <Image src="/images/dog3.jpg" />
          <Image src="/images/dog4.jpg" />
          <Image src="/images/dog5.jpg" />
          <Image src="/images/dog6.jpg" />
          <Image src="/images/dog7.jpg" />
          <Image src="/images/dog8.jpg" />
          <Image src="/images/dog9.jpg" />
          <Image src="/images/dog10.jpg" />
        </StyledImageGrid>
      </StyledMain>
    </>
  );
}
