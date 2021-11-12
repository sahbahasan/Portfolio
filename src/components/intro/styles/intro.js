import styled from "styled-components/macro";

export const Container = styled.div`
  height: 100vh;
  position: relative;
  background-image: linear-gradient(to right, #ffffffb0, #ffffff4f);
  //padding-top: 25rem;

  //padding-left: 5rem;
`;
export const TextContainer = styled.div`
  background-color: #ffffffb0;
  font-size: 3.1rem;
  color: #c5c2c2;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  padding: 11rem;
  text-align: center;
  letter-spacing: 1px;
  //line-height: 1;
  border-radius: 50px;

  h2 {
    font-size: 2rem;
  }
`;
export const NavContainer = styled.div`
  background-color: #ffffffb0;
  position: sticky;
  color: grey;
  width: 100%;
  margin-bottom: 16rem;
  font-size: 1.5rem;
  padding: 1.9rem;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    list-style: none;
  }
  ul:not(:last-child) {
    margin-right: 5rem;
  }
`;
