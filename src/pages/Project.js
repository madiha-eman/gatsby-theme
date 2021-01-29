// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const Project = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allContentfulProject1 {
//         edges {
//           node {
//             githubLink
//             createdAt
//             title
//             tools
//             thumbnail {
//               id
//               fluid {
//                 src
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   console.log(data.allContentfulProject1)
//   const projectlist = data.allContentfulProject1.edges;
//   return(
// <>
//       {
//         projectlist.map((item)=>(
//           <>
//            <h5>{item.node.title}</h5>
//            <img src={item.node.thumbnail.fluid.src} width={100}/>
//           </>
//         ))
//       }
// </>

//   )
// }

// export default Project
