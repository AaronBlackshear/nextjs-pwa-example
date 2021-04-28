import Head from "next/head";
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
      </StyledMain>
    </>
  );
}
