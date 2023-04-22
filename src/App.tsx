import ButtonAppBar from "./components/ButtonAppBar";
import Resume from "./components/Resume";
import { Container } from "@mui/material";
function App() {
  return (
    <>
    <ButtonAppBar/>
      <Container>
        <Resume />
      </Container>
    </>
  );
}

export default App;
