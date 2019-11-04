import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import RegistrationListContainer from "./components/registrationList";
import RegistrationLineChart from "./components/registrationChart";
import { StoreProvider } from "./helpers/store-helpers";

export default function appContainer() {
  return (
    <div>
      <StoreProvider>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Weight Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <main style={{padding: "1.5rem"}}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={6}
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs>
                <Paper>
                  <RegistrationLineChart />
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper>
                  <RegistrationListContainer />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </StoreProvider>
    </div>
  );
}
