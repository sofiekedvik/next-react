import Layout from '../components/Layout'
import Link from 'next/link'

function getPosts () {
    return [
        {id: "my-first-post", title: "My First post"},
        {id: "my-second-post", title: "My Second post"},
        {id: "my-third-post", title: "My Third post"},
        {id: "i-love-blogging", title: "I love blogging"}
    ]
}

const PostLink = ({ post }) => (
    <li>
        <Link as={`/post/${post.id}`} href={`/post?title=${post.title}`}>
          <a>{post.title}</a>
        </Link>
        <style jsx>{`
            li {
                margin: 5px 0;
            }

            a {
                font-family: "Arial";
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map((post) => (
            <PostLink key={post.id} post={post}/>
            ))}
        </ul>
        <style jsx>{`
            h1 {
                font-family: "Arial";
            }

            ul {
                padding: 0;
                list-style: none;
            }
            `}</style>
    </Layout>
)
