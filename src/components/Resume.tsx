import {
  Box,
  Stack,
  alpha,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
} from "@mui/material";

import {
  LocationOn,
  Email,
  PhoneAndroid,
  GitHub,
  School,
  Person,
  Work,
  Cake,
  RecordVoiceOver,
} from "@mui/icons-material";

import myPhoto from "../assets/profile.jpg";
function Dashboard() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ my: 10 }}>
      <Box flex={2} bgcolor={alpha("#212121", 0.25)} borderRadius={1}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={4}
        >
          <img
            src={myPhoto}
            width={185}
            height={185}
            style={{ borderRadius: "50%", border: "3px solid #FFFFFF" }}
          />
        </Box>

        <Box pl={2}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemText>
                <Typography fontWeight={500} variant="h4">PERSONAL PROFILE</Typography>
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

          <List>
            <ListItem alignItems="flex-start">
              <ListItemText>
                <Typography fontWeight={500} variant="h4">EDUCATION</Typography>
                <Divider></Divider>
              </ListItemText>
            </ListItem>

            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body1">
                    THARNTECHNOLOGICAL COLLEGE
                  </Typography>
                  <Typography variant="body2">
                    Associate's Degree in Electronics and Industrial Technology
                  </Typography>
                  <Typography variant="body2">2017 - 2019</Typography>
                </ListItemText>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText>
                  <Typography>MATHAYOMWATSING SCHOOL</Typography>
                  <Typography variant="body2">2005 - 2008</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </List>

          <List>
            <ListItem alignItems="flex-start">
              <ListItemText>
                <Typography fontWeight={500} variant="h4">CONTACT</Typography>
                <Divider></Divider>
              </ListItemText>
            </ListItem>

            <List>
              <ListItem>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText>
                  <Typography>veewutsing@gmail.com</Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <PhoneAndroid />
                </ListItemIcon>
                <ListItemText>
                  <Typography>+66960816573</Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <GitHub />
                </ListItemIcon>
                <ListItemText>
                  <Typography>https://github.com/finalve</Typography>
                </ListItemText>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText>
                  <Typography>
                    147 rama 2 44 yak 7 Chomtong Chomtong Bangkok
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </List>

          <List>
            <ListItem alignItems="flex-start">
              <ListItemText>
                <Typography fontWeight={500} variant="h4">LANGUAGE</Typography>
                <Divider></Divider>
              </ListItemText>
            </ListItem>

            <List>
              <ListItem>
                <ListItemIcon>
                  <Typography fontWeight={500}>TH</Typography>
                </ListItemIcon>
                <ListItemText>
                  <Typography>Thai: Native</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Typography fontWeight={500}>EN</Typography>
                </ListItemIcon>
                <ListItemText>
                  <Typography>English: Basic reading skills</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </List>
        </Box>
      </Box>
      <Box flex={4} mb={5}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography fontWeight={500} variant="h4">ABOUT ME</Typography>
                  <Divider></Divider>
                </ListItemText>
              </ListItem>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemText>
                    <Typography fontWeight={500} pl={5}>
                      I am a diligent and persevering software developer with a
                      strong work ethic.
                    </Typography>
                    <Typography>
                      I get along well with others and am enthusiastic about
                      learning new things. I can quickly understand and adapt to
                      different work environments. I am ready to collaborate and
                      contribute to a team, helping to achieve our goals with
                      eagerness and an open mind to share my knowledge and
                      skills.
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </List>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography fontWeight={500} variant="h4">Skills and Expertise</Typography>
                  <Divider></Divider>
                </ListItemText>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Stepper activeStep={6} orientation="vertical">
                    <Step>
                      <StepLabel>
                        Programming languages: C++, C#, Javascript, Typescript,
                        Solidity, PHP
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>Databases: MySQL, MongoDB</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        Other technologies and tools: Docker, Github, NodeJS,
                        ReactJS, Laravel
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        Ability to work in both frontend and backend web
                        development, with a stronger focus on backend
                      </StepLabel>
                    </Step>
                  </Stepper>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Typography fontWeight={500} variant="h4">WORK EXPERIENCE</Typography>
                  <Divider></Divider>
                </ListItemText>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText>
                  <Stepper activeStep={6} orientation="vertical">
                    <Step>
                      <StepLabel>
                        Independent Software Developer form 2017 to 2019
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        Developed various bots using C# to support customer
                        sales and project management
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        Wrote smart contracts in Solidity for use in blockchain
                        systems
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        Experience in web development, both frontend and
                        backend, with a stronger focus on backend
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        Developed websites for selling in-game products using
                        various technologies such as NodeJS, ReactJS, and
                        Laravel
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        Web development: CSS, Bootstrap, Material-UI (Mui)
                      </StepLabel>
                    </Step>
                  </Stepper>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
}

export default Dashboard;
