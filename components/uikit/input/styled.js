import styled, { css } from "styled-components";
import { breakpoints } from "@/constants/media";

/* Principal Container */
const InputIconContainer = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;

  /* Props principal container */
  ${(props) =>
    props.design === "searchHome" &&
    css`
      width: 70%;
      margin: 0 auto !important;

      @media (max-width: ${breakpoints.mobile}) {
        width: 80%;
      }
    `}
`;

/* Icon container */
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4%;
  padding: 4.2% 5% 4.2% 5%;
  border-radius: 8px 0px 0px 8px;
  -moz-border-radius: 8px 0px 0px 8px;
  -webkit-border-radius: 8px 0px 0px 8px;
  background-color: var(--gray);
  margin: 8% 0% 0% 0%;

  .inputIcon {
    width: 100%;
    font-size: 1.1em;
    color: #818689;
  }

  .inputIcon.focused {
    color: var(--orange) !important;
  }

  /* Props icon container */
  ${(props) =>
    props.design === "searchHome" &&
    css`
      margin-top: 0% !important;
      padding: 2.9% 3.5% 2.9% 3.5% !important;

      @media (max-width: ${breakpoints.mobile}) {
        padding: 4.5% 5% 4.5% 6% !important;
      }
    `}

  ${(props) =>
    props.design === "iniciarSesion" &&
    css`
      font-size: 1em;
    `}
`;

/* Input container */
const InputContainer = styled.input`
  width: 82%;
  padding: 4.2% 4% 4.2% 0% !important;
  border: 0 !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  outline: none !important;
  background-color: var(--gray);
  margin: 8% 0% 0% 0%;
  border-radius: 0px 8px 8px 0px;
  -moz-border-radius: 0px 8px 8px 0px;
  -webkit-border-radius: 0px 8px 8px 0px;
  font-family: var(--inter);
  font-size: 1em;
  color: var(--inputgrayfont);
  transition: 0.4s all;

  :focus-within {
    color: var(--orange) !important;
    font-size: 0.9em !important;
  }

  ::placeholder {
    color: var(--inputgrayfont);
  }

  :valid {
    color: var(--inputgrayfont);

    /* Props input container */
    ${(props) =>
      props.design === "searchHome" &&
      css`
        width: 84%;
        margin-top: 0% !important;
        padding: 2.8% 3% 2.8% 0% !important;

        @media (max-width: ${breakpoints.mobile}) {
          padding: 4.5% 3% 4.5% 0% !important;
        }
      `}

    ${(props) =>
      props.design === "iniciarSesion" &&
      css`
        font-size: 0.9em !important;
      `}
  }
`;

export { IconContainer, InputContainer, InputIconContainer };
