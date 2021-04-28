import { useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Link from "next/link";

const ContainerStyles = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PWAToastStyles = styled.div`
  div {
    margin-top: 10px;

    button {
      padding: 2px 10px;
      border: none;
      border-radius: 4px;
      font-size: 20px;
      background: white;
      color: #3498db;
      margin: 0px 5px;
    }
  }
`;

const HeaderStyles = styled.header`
  padding: 2rem 0;

  a {
    font-size: 36px;
    font-weight: bold;
  }
`;

export const PWAToast = ({ deferredPrompt, toastID, installPrompt }) => {
  return (
    <PWAToastStyles>
      <p>Install site to home page?</p>

      <div>
        <button
          type="button"
          onClick={async () => {
            toast.dismiss(toastID);

            deferredPrompt.prompt();

            const { outcome } = await deferredPrompt.userChoice;

            if (outcome === "dismissed") {
              window.removeEventListener("beforeinstallprompt", installPrompt);
            }

            deferredPrompt = null;
          }}
        >
          Install
        </button>
        <button
          type="button"
          onClick={() => {
            toast.dismiss(toastID);

            window.removeEventListener("beforeinstallprompt", installPrompt);
          }}
        >
          Cancel
        </button>
      </div>
    </PWAToastStyles>
  );
};

export default function Page({ children, ...props }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let deferredPrompt;

      const installPrompt = (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;

        const toastID = toast.info(
          <PWAToast
            toastID={toastID}
            deferredPrompt={deferredPrompt}
            installPrompt={installPrompt}
          />,
          {
            autoClose: false,
            closeOnClick: false,
            draggable: false,
          }
        );

        console.log(`'beforeinstallprompt' event was fired.`);
      };

      window.addEventListener("beforeinstallprompt", installPrompt);
    }
  }, []);

  return (
    <ContainerStyles {...props}>
      <HeaderStyles>
        <Link href="/">
          <a>PetPics</a>
        </Link>
      </HeaderStyles>
      {children}
    </ContainerStyles>
  );
}
