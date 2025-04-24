import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <NavBar></NavBar>
    </Wrapper>
  );
}

export default App;
