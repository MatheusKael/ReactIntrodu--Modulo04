import React, { Component } from "react";
import PostItem from "./Post";
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Matheus Kael',
          avatar: 'https://avatars3.githubusercontent.com/u/43392922?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4'
            },
            date: '04 Jun 2019',
            content:
              'oi, sumido, quer trabalhar pra mim?'
          },
          
        ]
      },
      {
        id: 1,
        author: {
          name: 'Jaum Coutao',
          avatar: 'https://avatars3.githubusercontent.com/u/31421876?s=460&v=4'
        },
        date: '04 Jun 2019',
        content: 'E ae, gente, sabiam que eu sou viadao?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Matheus kael',
              avatar: 'https://avatars3.githubusercontent.com/u/43392922?s=460&v=4'
            },
            date: '04 Jun 2019',
            content:
              'Faaz hooooras'
          },
          
        ]
      },
      
     
      
        
      
    ]
  };
  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
      {posts.map(post => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
     
    );
  }
}

export default PostList;
