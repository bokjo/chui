import React from 'react';
import { createStore } from '@spyna/react-store'

import NavContainer from './containers/NavContainer'
import JoinDrawContainer from './containers/JoinDrawContainer'
import AllowanceRequestContainer from './containers/AllowanceRequest'
import DsrInfoContainer from './containers/DsrInfo'

import theme from './theme/theme'

import { withStyles, ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


const styles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  },
  navContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    minHeight: 52
  },
  contentContainer: {
      // boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.05)',
      borderRadius: theme.shape.borderRadius,
      padding: 0,
      marginBottom: theme.spacing(3)
  }
})

const initialState = {
    web3: null,
    walletAddress: '',
    walletConnecting: false,
    walletType: '',
    daiBalance: '',
    daiAllowance: '',
    allowanceAvailable: false,
    chaiBalance: '',
    dsrRaw: '',
    dsr: '',
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentDidMount() {
    }

    render() {
        const classes = this.props.classes
        return (
            <ThemeProvider theme={theme}>
                <Container maxWidth="md">
                    <Grid container>
                        <Grid item xs={12}><br/></Grid>
                        <NavContainer />
                        <AllowanceRequestContainer />
                        <DsrInfoContainer />
                        <Grid item xs={12} className={classes.contentContainer}>
                            <JoinDrawContainer/>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        );
    }
}

export default createStore(withStyles(styles)(App), initialState)