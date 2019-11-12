import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RegistrationListContainer from "./components/registrationList";
import RegistrationChartContainer from "./components/registrationChart";
import { StoreProvider } from "./helpers/store-helpers";
import AddRegistration from "./components/addRegistration";

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
        <main style={{ padding: "1.5rem" }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs>
                <Paper>
                  <RegistrationChartContainer />
                </Paper>
              </Grid>
              <Grid item xs>
                <Grid container direction="column" alignItems="flex-end">
                  <Grid item style={{width: "100%"}}>
                    <Paper>
                      <RegistrationListContainer />
                    </Paper>
                  </Grid>
                  <Grid item>
                    <AddRegistration />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </main>
      </StoreProvider>
    </div>
  );
}
