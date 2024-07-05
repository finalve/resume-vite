import { useState } from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Resume from "./components/Resume";
import { Box, Container, PaletteMode, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { savePDF } from "@progress/kendo-react-pdf";
import Home from "./components/Home";
function App() {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const exportPDF = () => {
    const element = document.getElementById("resume");
    if (element) {
      if (mode === "dark") element.style.backgroundColor = "#212121";
      savePDF(element, {
        paperSize: "A4",
        scale: 0.5,
        margin: { top: 0, left: 0, right: 0, bottom: 0 },
        fileName: "resume.pdf",
      });
    }
  };

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
              exportPDF,
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
          <section id="contact">
            <Contact />
          </section>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
