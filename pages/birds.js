import Head from "next/head";
import Image from "../components/Image";
import { StyledImageGrid } from "./cats";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export default function birds() {
  return (
    <>
      <Head>
        <title>Birds</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to the Birds Page!</StyledTitle>

        <StyledDescription>
          Get started by browsing pictures of birds.
        </StyledDescription>

        <StyledImageGrid>
          <Image src="/images/bird1.jpg" />
          <Image src="/images/bird2.jpg" />
          <Image src="/images/bird3.jpg" />
          <Image src="/images/bird4.jpg" />
          <Image src="/images/bird5.jpg" />
          <Image src="/images/bird6.jpg" />
          <Image src="/images/bird7.jpg" />
          <Image src="/images/bird8.jpg" />
          <Image src="/images/bird9.jpg" />
          <Image src="/images/bird10.jpg" />
        </StyledImageGrid>
      </StyledMain>
    </>
  );
}
