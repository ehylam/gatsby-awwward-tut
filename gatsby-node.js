// Could import data from a API like WP REST API

// Cool way to create pages based on the data in the json + the data can also get pulled from
// a GraphQL source or something like from the Wordpress Rest API
exports.createPages = ({actions: {createPage}}) => {
    const posts = require('./src/data/posts/post.json')
    posts.forEach(post => {
        createPage({
            path: `/post/${post.id}`,
            component: require.resolve('./src/templates/Post.js'),
            context: post,
        })
    })
}