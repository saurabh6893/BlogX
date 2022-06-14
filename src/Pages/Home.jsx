import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function Home() {
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'posts')
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  })

  return (
    <div>
      {postList.map((post) => {
        return (
          <div className='page'>
            <div className='aPost border-8 rounded-lg w-[40vw] mt-7 px-10 py-5'>
              <h1 className='text-5xl m-4 pb-4 border-b-4 capitalize'>
                {post.title}
              </h1>
              <p className='text-2xl m-4'>{post.postText}</p>
              <p className='m-4 hover:font-bold hover:tracking-wide transition-all'>
                @{post.author.name}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
