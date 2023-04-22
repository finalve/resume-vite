
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";


function Root() {
  return (
    <Box>
      <Box>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default Root;
