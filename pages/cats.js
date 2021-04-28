import Head from "next/head";
import Page from "../components/Page";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export default function cats() {
  return (
    <Page>
      <Head>
        <title>Cats</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to the Cats Page!</StyledTitle>

        <StyledDescription>
          Get started by browsing pictures of cats.
        </StyledDescription>
      </StyledMain>
    </Page>
  );
}
