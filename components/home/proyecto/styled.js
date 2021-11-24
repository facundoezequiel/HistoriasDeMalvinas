import styled from "styled-components";

/* Principal container */
const Container = styled.div`
  width: 60%;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 70px 0px 0px 0px;
  align-items: center;

  // Titulo y texto Container
  .textContainer {
    width: 55%;
  }

  // Titulo
  h2 {
    color: var(--black);
    width: 100%;
    font-weight: 700;
    text-align: left;
    font-size: 2em;
    font-family: var(--poppins);
  }

  /* Title "#NoLosOlvidamos" */
  h2 span {
    font-weight: 400 !important;
  }

  /* Text */
  p {
    width: 100%;
    margin: 40px 0px 0px 0px;
    font-family: var(--inter);
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 26px;
    text-align: left;
    color: var(--black);
  }

  /* Text orange */
  p span {
    color: var(--orange) !important;
  }

  /* Animation lottie */
  .animationLottie {
    pointer-events: none;
  }

  /* Animation Lottie div */
  .animationLottie div {
    margin: 0% 0% 0% 0% !important;
  }
`;

export default Container;
