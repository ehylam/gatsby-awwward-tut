import React from 'react';


const Post = ({pageContext}) => {
    const post = pageContext;
    return (
        <section className="post">
            <div className="post-heading">
                {post.title}
            </div>
            <div className="post-content">
                {post.id}
            </div>
        </section>
     );
}

export default Post;

