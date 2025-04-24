import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0.5rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0.5rem;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;

const Li = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background-color: #111;
  }
`;

function NavBar() {
  return (
    <>
      <Wrapper>
        <Logo>Fake Store</Logo>
        <Ul>
          <Li>
            <Link to={"home"}>Home</Link>
          </Li>
          <Li>
            <Link to={"shop"}>Shop</Link>
          </Li>
          <Li>
            <Link to={"cart"}>Cart</Link>
          </Li>
        </Ul>
      </Wrapper>
      <Outlet />
    </>
  );
}

export default NavBar;
