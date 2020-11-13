import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./router";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = props => {
  const classes = useStyles();
  const { userAuth} = props;

  

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route
            path={route.path}
            component={route.component}
            key={route.id}
            exact={route.exact && true}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App