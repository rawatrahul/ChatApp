import React from "react";
import {Header, Icon} from 'semantic-ui-react'
import LoginForm from "./LoginPage";

export default class Layout extends React.Component {
    render() {
        return (<div>
            <Header as='h2' icon textAlign='center'>
                <Header.Content>{<Icon color='blue' name='comment alternate'/>}Welcome to Chat</Header.Content>
            </Header>
            <LoginForm/>
        </div>);
    }
}