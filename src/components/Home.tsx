import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
  alpha,
} from "@mui/material";
import bgImage from "../assets/homePhoto.png";
import { Cake, Person, RecordVoiceOver, Work } from "@mui/icons-material";
import myPhoto from "../assets/profile.jpg";
import { useState } from "react";

import htmlicon from "../assets/icon/html5.png";
import bsicon from "../assets/icon/bootstrap.png";
import cplusicon from "../assets/icon/cplus.png";
import csharpicon from "../assets/icon/csharp.png";
import jsicon from "../assets/icon/javascript.png";
import tsicon from "../assets/icon/typescript.png";
import phpicon from "../assets/icon/php.png";
import mysqlicon from "../assets/icon/mysql.png";
import mongoicon from "../assets/icon/mongo.png";
import nodejsicon from "../assets/icon/nodejs.png";
import reacticon from "../assets/icon/react.png";
import laravelicon from "../assets/icon/laravel.png";
import solidityicon from "../assets/icon/solidity.png";
const skills = [
  htmlicon,
  bsicon,
  nodejsicon,
  reacticon,
  jsicon,
  tsicon,
  cplusicon,
  csharpicon,
  mysqlicon,
  mongoicon,
  solidityicon,
];

import cmdicon from "../assets/icon/command.png";
import dockericon from "../assets/icon/docker.png";
import giticon from "../assets/icon/git.png";
import npmicon from "../assets/icon/npm.png";
import vsicon from "../assets/icon/vscode.png";
import unityicon from "../assets/icon/unity.png";
const tools = [
  cmdicon,
  dockericon,
  giticon,
  npmicon,
  vsicon,
  unityicon,
];
function Home() {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Stack
          spacing={2}
          sx={{
            width: 300,
            p: 4,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            bgcolor: "#a5a5a535",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={myPhoto}
              width={250}
              height={250}
              style={{ borderRadius: "50%", border: "3px solid #FFFFFF" }}
            />
          </Stack>
          <Stack spacing={2}>
            <Box
              component="h2"
              sx={{
                textShadow: "0px 0px 3px #FFF",
                textAlign: "center",
              }}
            >
              PERSONAL PROFILE
              <Divider sx={{ boxShadow: "0px 1px 1px #FFF" }} />
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Person />
              <Box
                component="span"
                sx={{
                  textShadow: "0px 0px 3px #FFF",
                  textAlign: "end",
                }}
              >
                Waleesin Sangarunpaisarn
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Work />
              <Box
                component="span"
                sx={{
                  textShadow: "0px 0px 3px #FFF",
                  textAlign: "end",
                }}
              >
                Fullstack Developer
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Cake />
              <Box
                component="span"
                sx={{
                  textShadow: "0px 0px 3px #FFF",
                  textAlign: "end",
                }}
              >
                Birth Day : June 18,1992
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <RecordVoiceOver />
              <Box
                component="span"
                sx={{
                  textShadow: "0px 0px 3px #FFF",
                  textAlign: "end",
                }}
              >
                Nationality : Thai Native
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={2} sx={{flex:1}}>
          <Stack>
          <Box sx={{bgcolor:alpha('#212121',0.1),  borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,}}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={4} justifyContent={"center"} my={2} pl={2}>
          <Box my={3} >
            <Typography variant="h3" fontWeight={500} style={{textShadow:"0px 0px 3px #FFF"}}>
              What My Programming Skills Included?
            </Typography>
            <Divider />
          </Box>
          <Box>
            <Typography style={{textShadow:"0px 0px 3px #FFF"}}>
              "I excel in coordinating system operations, possess skills in
              designing and developing diverse systems, and am adept at adapting
              and integrating various tools and technologies seamlessly."
            </Typography>
            <Box p={2}>
            <Tabs value={value}   onChange={handleChange} textColor="secondary" indicatorColor="secondary">
              <Tab label="SKILL" value={0} />
              <Tab label="TOOLS" value={1} />
            </Tabs>
            </Box>
           
          </Box>
        </Box>
        <Box flex={3} pl={{ xs: 0, md: 10 }} py={5} my={2}>
          <Grid container spacing={2}>
            {value === 0 ? skills.map((icon, index) => (
              <Grid item xs={3}  key={index}>
                <Card
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                >
                  <CardMedia
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img src={icon} alt="" width={50} height={50} />
                  </CardMedia>
                </Card>
              </Grid>
            )) :tools.map((icon, index) => (
                <Grid item xs={3}   key={index}>
                  <Card
                    sx={{
                      width: 50,
                      height: 50,
                    }}
                  >
                    <CardMedia
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <img src={icon} alt="" width={50} height={50} />
                    </CardMedia>
                  </Card>
                </Grid>
              )) }
          </Grid>
        </Box>
      </Stack>
    </Box>
            </Stack>
      </Stack>
      </Stack>
    </Stack>
    //   <Box mt={7.5}
    //     sx={{
    //       backgroundImage: `url(${bgImage})`,

    //       backgroundSize: { xs: "contain", sm: "auto" },
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "center",
    //       display: "grid",
    //       placeItems: { xs: "center", md: "start" },
    //     }}
    //   >
    //     <Box bgcolor={alpha("#212121", 0.25)}>
    //       <Box
    //         display={"flex"}
    //         justifyContent={"center"}
    //         alignItems={"center"}
    //         pt={4}
    //       >
    //         <img
    //           src={myPhoto}
    //           width={250}
    //           height={250}
    //           style={{ borderRadius: "50%", border: "3px solid #FFFFFF" }}
    //         />
    //       </Box>

    //       <List>
    //         <ListItem alignItems="flex-start">
    //           <ListItemText>
    //             <Typography fontWeight={500} variant="h4" style={{textShadow:"0px 0px 3px #FFF"}}>
    //               PERSONAL PROFILE
    //             </Typography>
    //             <Divider></Divider>
    //           </ListItemText>
    //         </ListItem>

    //         <List>
    //           <ListItem>
    //             <ListItemIcon>
    //               <Person />
    //             </ListItemIcon>
    //             <ListItemText>
    //               <Typography style={{textShadow:"0px 0px 3px #FFF"}}>Waleesin Sangarunpaisarn</Typography>
    //             </ListItemText>
    //           </ListItem>

    //           <ListItem>
    //             <ListItemIcon>
    //               <Work />
    //             </ListItemIcon>
    //             <ListItemText>
    //               <Typography style={{textShadow:"0px 0px 3px #FFF"}}>Backend Deverloper</Typography>
    //             </ListItemText>
    //           </ListItem>

    //           <ListItem>
    //             <ListItemIcon>
    //               <Cake />
    //             </ListItemIcon>
    //             <ListItemText>
    //               <Typography style={{textShadow:"0px 0px 3px #FFF"}}>Birth Day : June 18,1992</Typography>
    //             </ListItemText>
    //           </ListItem>

    //           <ListItem alignItems="flex-start">
    //             <ListItemIcon>
    //               <RecordVoiceOver />
    //             </ListItemIcon>
    //             <ListItemText>
    //               <Typography style={{textShadow:"0px 0px 3px #FFF"}}>Nationality : Thai Native</Typography>
    //             </ListItemText>
    //           </ListItem>
    //         </List>
    //       </List>
    //     </Box>
    //   </Box>
  );
}

export default Home;
