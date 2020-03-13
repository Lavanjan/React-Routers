import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import imgsam from '../Images/Information.png'



class Home extends Component{
    state = {
        posts:[]
    }
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
        // console.log(res)
        this.setState({
            posts: res.data.slice(0,10)
        })

    })
}

    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post =>{
                return(
                    <div className = "post card" key = {post.id}>
                        <img src = {imgsam} alt ="Image"></img>
                        <div className = "card-content">
                            <Link to = {'/' + post.id}>
                        <span className = "card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) :(
            <div className = "center">No Post Yet</div>
        )
    return(
        <div className="container">
            <h4 className = "center">Home</h4>
            {postList}
        </div>
    )
}
}

export default Home