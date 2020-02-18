import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import AccessibilityNewOutlined from '@material-ui/icons/AccessibilityNewOutlined';
import Commute from '@material-ui/icons/Commute'


const categories = [
  {
    id: 'Funcionalidades',
    children: [
      { id: 'Cad. de Pessoas', icon: <PeopleIcon />, active: true },
      { id: 'Cad de Exames', icon: <Commute />, active:false },
      { id: 'Relatórios', icon: <AccessibilityNewOutlined />, active:false },
    ],
  },

  // {
  //   id: '',
  //   children: [
  //     { id: 'Logout', icon: <SettingsIcon /> },

  //   ],
  // },
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#28AFB0',
    boxShadow: '0 -1px 0 #19647E inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  itemHeader: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#FFF',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, setacontent, ...other } = props;

  function activeFuncionality(nameOf){
    setacontent(nameOf);
    // console.log(setacontent)
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>

        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          PREVLAB
        </ListItem>

        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Laboratório de Análises
          </ListItemText>
        </ListItem>



        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                key={childId}
                button
                onClick={() => activeFuncionality(childId)}
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer >
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);