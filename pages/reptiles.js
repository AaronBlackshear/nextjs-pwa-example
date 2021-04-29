import Head from "next/head";
import Image from "../components/Image";
import { StyledImageGrid } from "./cats";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export default function reptiles() {
  return (
    <>
      <Head>
        <title>Reptiles</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to the Reptiles Page!</StyledTitle>

        <StyledDescription>
          Get started by browsing pictures of reptiles.
        </StyledDescription>

        <StyledImageGrid>
          <Image src="/images/reptile1.jpg" />
          <Image src="/images/reptile2.jpg" />
          <Image src="/images/reptile3.jpg" />
          <Image src="/images/reptile4.jpg" />
          <Image src="/images/reptile5.jpg" />
          <Image src="/images/reptile6.jpg" />
          <Image src="/images/reptile7.jpg" />
          <Image src="/images/reptile8.jpg" />
          <Image src="/images/reptile9.jpg" />
          <Image src="/images/reptile10.jpg" />
        </StyledImageGrid>
      </StyledMain>
    </>
  );
}
