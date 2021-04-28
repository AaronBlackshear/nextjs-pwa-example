import Head from "next/head";
import { StyledDescription, StyledMain, StyledTitle } from "./index";

export default function offline() {
  return (
    <>
      <Head>
        <title>Offline</title>
      </Head>

      <StyledMain>
        <StyledTitle>Looks like you're offline</StyledTitle>

        <StyledDescription>
          You need to connect to the internet before you can access the page
          again.
        </StyledDescription>
      </StyledMain>
    </>
  );
}
