import Head from "next/head";
import Page from "../components/Page";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export default function dogs() {
  return (
    <Page>
      <Head>
        <title>Dogs</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to the Dogs Page!</StyledTitle>

        <StyledDescription>
          Get started by browsing pictures of dogs.
        </StyledDescription>
      </StyledMain>
    </Page>
  );
}
