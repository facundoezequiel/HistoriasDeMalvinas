import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 6% 0% 6% 0%;
  background-color: var(--gray2);

  section {
    width: 100%;
    max-width: 1340px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  .titleButtonsContainer {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 4%;
  }

  .titleButtonsContainer div {
    display: flex;
    width: 30%;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin-right: 1.3%;
  }

  .gridButtons {
    margin: 0px 0px 0px 0px !important;
  }

  .gridButtons a {
    width: 35%;
    padding: 10px 15px 10px 15px;
    border-radius: 6px;
    color: var(--white);
    text-decoration: none;
    background-color: var(--orange);
    font-family: var(--poppins);
    text-align: center;
    transition: 0.2s all;
  }

  .gridButtons a:hover {
    background-color: var(--black);
  }

  h2 {
    color: var(--black);
    font-weight: 700;
    text-align: left;
    font-size: 2em;
    font-family: var(--poppins);
  }
`;

export default Container;
