import { useState } from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Resume from "./components/Resume";
import {
  Box,
  Container,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleHome = () => {
    const element = document.getElementById("home");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkill = () => {
    const element = document.getElementById("skill");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleResume = () => {
    const element = document.getElementById("resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <Box>
          <ResponsiveAppBar
            mode={mode}
            setMode={setMode}
            handle={{
              handleHome,
              handleAbout,
              handleSkill,
              handleResume,
              handleContact,
            }}
          />
        </Box>
        <Container>
        <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skill">
            <Skills />
          </section>
          <section id="resume">
            <Resume />
          </section>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
