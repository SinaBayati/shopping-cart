import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  padding: 6rem 2rem;
`;

const StyledH2 = styled.h2`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 4rem;
`;

const StyledP = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  color: white;
`;

const StyledLink = styled(Link)`
  background-color: white;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 1rem 3rem;
  display: inline-block;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.3rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px white;
    cursor: pointer;
  }
`;

function HomePage() {
  const { setActivePage } = useOutletContext();
  return (
    <Wrapper>
      <StyledH2>Welcome to WallCart's Homepage</StyledH2>
      <StyledP>Click on the button below to browse through our shop!</StyledP>
      <StyledLink to={"/shop"} onClick={() => setActivePage("shop")}>
        Shop Now
      </StyledLink>
    </Wrapper>
  );
}

export default HomePage;
