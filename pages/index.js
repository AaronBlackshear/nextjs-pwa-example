import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 0;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  max-width: 650px;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

export const StyledDescription = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;

  code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }
`;

export const StyledGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledCard = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <StyledMain>
        <StyledTitle>Welcome to a Next.js PWA Example</StyledTitle>

        <StyledGrid>
          <Link href="/cats">
            <StyledCard>
              <h3>Cats &rarr;</h3>
              <p>Find tons of pictures of all breeds of cats.</p>
            </StyledCard>
          </Link>

          <Link href="/dogs">
            <StyledCard>
              <h3>Dogs &rarr;</h3>
              <p>Find tons of pictures of all breeds of dogs.</p>
            </StyledCard>
          </Link>

          <Link href="/birds">
            <StyledCard>
              <h3>Birds &rarr;</h3>
              <p>Find tons of pictures of all breeds of birds.</p>
            </StyledCard>
          </Link>

          <Link href="/reptiles">
            <StyledCard>
              <h3>Reptiles &rarr;</h3>
              <p>Find tons of pictures of all kinds of reptiles.</p>
            </StyledCard>
          </Link>
        </StyledGrid>
      </StyledMain>
    </>
  );
}
