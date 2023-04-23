import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import bgImage from "../assets/homePhoto.png";
import { Cake, Person, RecordVoiceOver, Work } from "@mui/icons-material";
import myPhoto from "../assets/profile.jpg";
function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,

        backgroundSize: { xs: "contain", sm: "auto" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "grid",
        placeItems: { xs: "center", md: "start" },
      }}
    >
      <Box bgcolor={alpha("#212121", 0.25)}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={4}
        >
          <img
            src={myPhoto}
            width={250}
            height={250}
            style={{ borderRadius: "50%", border: "3px solid #FFFFFF" }}
          />
        </Box>

        <List>
          <ListItem alignItems="flex-start">
            <ListItemText>
              <Typography fontWeight={500} variant="h4">
                PERSONAL PROFILE
              </Typography>
              <Divider></Divider>
            </ListItemText>
          </ListItem>

          <List>
            <ListItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText>
                <Typography>Waleesin Sangarunpaisarn</Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText>
                <Typography>Backend Deverloper</Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Cake />
              </ListItemIcon>
              <ListItemText>
                <Typography>Birth Day : June 18,1992</Typography>
              </ListItemText>
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <RecordVoiceOver />
              </ListItemIcon>
              <ListItemText>
                <Typography>Nationality : Thai</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </List>
      </Box>
    </Box>
  );
}

export default Home;
