import {
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import myPhoto from "../assets/BackgroundAbout.png";
function About() {
  return (
    <Box sx={{ my: 10 }}>
     
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={4} display={"flex"} justifyContent={"center"}>
            <img src={myPhoto} alt="" width={300} height={300} />
          </Box>
          <Box flex={4} justifyContent={"center"}>
            <Box my={3}>
              <Typography variant="h2" fontWeight={500}>
                About Me
              </Typography>
              <Divider />
            </Box>
            <Box>
              <Typography>
                "Hi! I'm Waleesin. I am a diligent and persevering software
                developer with a strong work ethic. I get along well with others
                and am enthusiastic about learning new things. I can quickly
                understand and adapt to different work environments. I am ready
                to collaborate and contribute to a team, helping to achieve our
                goals with eagerness and an open mind to share my knowledge and
                skills."
              </Typography>
            </Box>
          </Box>
        </Stack>
    </Box>
  );
}

export default About;
