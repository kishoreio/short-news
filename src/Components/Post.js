import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Spinner } from 'react-bootstrap';

class Post extends Component{
    state={
        articles: [ ]
    }
    componentDidMount(){
        let id = this.props.location.pathname.slice(1);
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${id}&apiKey=8a3e917dbb1546639266a6df81c1697e`)
        .then(response => {
            this.setState({
                articles: response.data.articles
            })
        })
    }
    render(){
        const { articles } = this.state
        const postList = articles.length ? (articles.map(post => {
                return(
                        <div key={post.source.id}>
                            <Card className="text-center">
                            <Card.Header>{post.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{post.content}</Card.Title>
                                <Card.Text>
                                {post.description}
                                </Card.Text>
                                <Button href={post.url} target="_blank">Click here to read full story</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">{post.source.name}</Card.Footer>
                            </Card>
                            <br />
                        </div>
                )
            })
            ): (
                <div style={{textAlign: "center"}}>
                    <Spinner animation="border" variant="success" />
                </div>
            )
        return(
            <div>
                {postList}
            </div>

        )
    }
}
export default Post;