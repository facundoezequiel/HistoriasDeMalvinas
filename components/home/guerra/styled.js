import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  padding: 4% 0% 4% 0%;
  background-color: var(--white);

  .textImageContainer {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0% 0% 0% 0%;
    align-items: center;
    width: 70%;
  }

  /* Title and text container */
  .textContainer {
    width: 45%;
  }

  /* Title "El proyecto" */
  h2 {
    color: var(--black);
    font-weight: 700;
    text-align: left;
    font-size: 2em;
    font-family: var(--poppins);
  }

  /* Text */
  p {
    width: 100%;
    font-family: var(--poppins);
    margin-top: 20px;
    font-size: 0.93em;
    line-height: 27px;
  }

  /* Text orange */
  p span {
    color: var(--orange);
  }

  /* Animation lottie */
  .animationLottie {
    pointer-events: none;
    margin: 0% 0% 0% 0% !important;
    width: 45%;
  }

  .animationLottie img {
    width: 100%;
  }
`;

export { Container };
