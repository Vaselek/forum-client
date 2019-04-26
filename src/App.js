import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {NotificationContainer} from "react-notifications";

import {logoutUser} from "./store/actions/usersActions";

import Toolbar from "./components/UI/Toolbar/Toolbar";
import Posts from "./containers/Posts/Posts";
import NewPost from "./containers/NewPost/NewPost";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Post from "./containers/Post/Post";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NotificationContainer/>
                <header>
                    <Toolbar
                        user={this.props.user}
                        logout={this.props.logoutUser}
                    />
                </header>
                <Container style={{marginTop: '20px'}}>
                    <Switch>
                        <Route path="/" exact component={Posts}/>
                        <Route path="/posts/new" exact component={NewPost}/>
                        <Route path="/post/:id" exact component={Post}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
