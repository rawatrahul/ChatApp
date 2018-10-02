import React from 'react'
import {Button, Form, Grid, Header, Icon, Segment} from 'semantic-ui-react'

const LoginForm = () => (
    <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 450}}>
                <Segment padded>
                    <Header as='h2' color='grey' icon textAlign='center'>
                        <Icon color='blue' name='address card'/>
                        <Header.Content>Type your name</Header.Content>
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Enter Username'/>
                            {/*<Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />*/}

                            <Button color='blue' fluid size='large'>
                                Start Chat
                            </Button>
                        </Segment>
                    </Form>
                </Segment>
                {/*<Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>*/}
            </Grid.Column>
        </Grid>
    </div>
);

export default LoginForm