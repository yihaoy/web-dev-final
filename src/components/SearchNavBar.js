import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../actions/movie";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
};

function ButtonAppBar(props) {
    const {classes} = props;
    let searchText;
    return (
        <div className={classes.root}>
            <AppBar position="static"
                    style={{backgroundColor: '#F33F0D'}}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex} >

                    </Typography>

                    <Link to={'/'}>
                        <Button className="text-white">
                            Home
                        </Button>
                    </Link>
                    <Link to={'/discover'}>
                        <Button className="text-white">
                            Discover
                        </Button>
                    </Link>

                    <Link to={'/news/reviews'}>
                        <Button className="text-white">
                            Critic Reviews
                        </Button>
                    </Link>
                    <FormControl className={classes.margin}>
                        <input
                            className='form-control fa-solid fa-magnifying-glass wd-center-magnify-glass'
                            ref={node => searchText = node}
                            placeholder='Search movies and more...'
                            id="custom-css-input"
                        />
                    </FormControl>
                    <Button color="inherit" onClick={() => {
                        console.log("Searched for:",searchText.value);
                        if(searchText.value){
                            props.searchMovie(searchText.value);
                        }
                    }}>Search</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


const dispatchToPropsMapper = dispatch => ({
    searchMovie: (searchText) => actions.searchMovie(dispatch, searchText)
});
const stateToPropsMapper = state => ({
});

const SearchNavBar = connect(stateToPropsMapper, dispatchToPropsMapper)(ButtonAppBar);

export default withStyles(styles)(SearchNavBar);