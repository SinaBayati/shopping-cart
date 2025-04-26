import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  padding: 1rem;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: block;
  font-size: 1.2rem;
  padding: 2rem 0;

  &:visited,
  &:active {
    color: white;
  }
`;

function ErrorElement() {
  return (
    <Wrapper>
      An error has occurred
      <StyledLink to="/">go back to homepage</StyledLink>
    </Wrapper>
  );
}

export default ErrorElement;
