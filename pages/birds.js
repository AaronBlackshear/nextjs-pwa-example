import Head from "next/head";
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
      </StyledMain>
    </>
  );
}
