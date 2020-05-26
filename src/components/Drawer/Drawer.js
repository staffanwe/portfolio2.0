import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarsIcon from '@material-ui/icons/Stars';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-scroll';

import '../NavBar/NavBar.css';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    container: {
        height: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    function whichIcon(index) {
        // eslint-disable-next-line default-case
        switch (index) {
            case 0:
                return <HomeIcon />;
            case 1:
                return <AccountCircleIcon />;
            case 2:
                return <StarsIcon />;
            case 3:
                return <WorkIcon />;
            case 4:
                return <MailIcon />;
        }
    }

    function whichLink(index) {
        // eslint-disable-next-line default-case
        switch (index) {
            case 0:
                return 'landing';
            case 1:
                return 'about';
            case 2:
                return 'skills';
            case 3:
                return 'projects';
            case 4:
                return 'contact';
        }
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'About me', 'Skills', 'Projects', 'Contact'].map(
                    (text, index) => (
                        <Link
                            className="link-about"
                            to={whichLink(index)}
                            smooth={true}
                            duration={800}
                            onClick={toggleDrawer(anchor, false)}
                        >
                            <ListItem button key={text}>
                                <ListItemIcon>{whichIcon(index)}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    )
                )}
            </List>
        </div>
    );

    return (
        <div className="drawer-wrapper">
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        style={{ color: '#fff', fontSize: '2.3rem' }}
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon fontSize="inherit" />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        PaperProps={{ classes: { root: classes.container } }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
