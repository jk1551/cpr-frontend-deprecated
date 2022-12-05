import React from 'react'
import fetch from 'isomorphic-unfetch'
import Card from '../components/Posts/Card';

const Posts = ({posts}) => {
  if(posts){
    return (
        <>
        {posts.map(post => {
            return (
                <div key={post.attributes.uuid}>
                <Card postInfo={post} />
                </div>
            )
        })}
        </>
    )
  }
  else {
    <p>there are no posts</p>
  }
}

export default Posts

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
    const data = await res.json();

    return {
        props: {
            posts: data.data
        }
    }
}