import { observer } from 'mobx-react-lite'
import React from 'react'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{border: 'none'}}
            >
                <Header>Aktivite hakkında sohbet et...</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Emre</Comment.Author>
                            <Comment.Metadata>
                                <div>Dün 17:00</div>
                            </Comment.Metadata>
                            <Comment.Text>Mükemmel!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Yanıtla</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Feride</Comment.Author>
                            <Comment.Metadata>
                                <div>5 gün önce</div>
                            </Comment.Metadata>
                            <Comment.Text>Bu gördüğüm en iyi aktivite</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Yanıtla</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button
                            content='Mesajını Gönder'
                            labelPosition='left'
                            icon='edit'
                            primary
                        />
                    </Form>
                </Comment.Group>
            </Segment>
        </>

    )
})