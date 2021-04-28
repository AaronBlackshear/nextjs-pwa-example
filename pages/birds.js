import Head from "next/head";
import Page from "../components/Page";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export default function birds() {
  return (
    <Page>
      <Head>
        <title>Birds</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to the Birds Page!</StyledTitle>

        <StyledDescription>
          Get started by browsing pictures of birds.
        </StyledDescription>
      </StyledMain>
    </Page>
  );
}
