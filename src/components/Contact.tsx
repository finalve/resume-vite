import { Email, GitHub, LocationOn, PhoneAndroid } from "@mui/icons-material"
import { Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, alpha } from "@mui/material"

function Contact() {
  return (
    <Card sx={{bgcolor:alpha("#212121", 0.25)}}>
        <CardContent>
        <List>
    <ListItem alignItems="flex-start">
      <ListItemText>
        <Typography fontWeight={500} variant="h3" style={{textShadow:"0px 0px 3px #FFF"}}>CONTACT</Typography>
        <Divider></Divider>
      </ListItemText>
    </ListItem>

    <List>
      <ListItem>
        <ListItemIcon>
          <Email />
        </ListItemIcon>
        <ListItemText>
          <Typography style={{textShadow:"0px 0px 3px #FFF"}}>veewutsing@gmail.com</Typography>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <PhoneAndroid />
        </ListItemIcon>
        <ListItemText>
          <Typography style={{textShadow:"0px 0px 3px #FFF"}}>+66960816573</Typography>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <GitHub />
        </ListItemIcon>
        <ListItemText>
          <Typography style={{textShadow:"0px 0px 3px #FFF"}}>https://github.com/finalve</Typography>
        </ListItemText>
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <LocationOn />
        </ListItemIcon>
        <ListItemText>
          <Typography style={{textShadow:"0px 0px 3px #FFF"}}>
            147 rama 2 44 yak 7 Chomtong Chomtong Bangkok
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  </List>
        </CardContent>
    </Card>
  )
}

export default Contact
