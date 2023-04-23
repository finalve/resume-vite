import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  alpha,
} from "@mui/material";

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
  cplusicon,
  csharpicon,
  jsicon,
  tsicon,
  phpicon,
  mysqlicon,
  mongoicon,
  nodejsicon,
  reacticon,
  laravelicon,
  solidityicon,
];

import cmdicon from "../assets/icon/command.png";
import dockericon from "../assets/icon/docker.png";
import giticon from "../assets/icon/git.png";
import npmicon from "../assets/icon/npm.png";
import vsicon from "../assets/icon/vscode.png";
import unityicon from "../assets/icon/unity.png";
import * as React from 'react';
const tools = [
    cmdicon,
    dockericon,
    giticon,
    npmicon,
    vsicon,
    unityicon,
  ];
function Skills() {
    const [value, setValue] = React.useState(0);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
  return (
    <Box sx={{ my: 10 ,bgcolor:alpha('#212121',0.5),borderRadius:5 }}>
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
                    width: 75,
                    height: 75,
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
                      width: 75,
                      height: 75,
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
  );
}

export default Skills;
