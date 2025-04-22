import React from 'react'
import { 
  useCreatePostMutation, 
  useDeletePostMutation, 
  useGetApiByNameQuery, 
  useUpdatePostMutation } from './services/api'

export default function App() {
  const {
    data,
    error,
    isLoading,
    isSuccess,
    isFetching,
    refetch} = useGetApiByNameQuery();

  return (
    <div>
      <h1>React RTK Query</h1>
      {isLoading && <h2>Loding....</h2>}
      {isFetching && <h2>Fetching....</h2>}
      {error && <h2>Error</h2>}
      {isSuccess && (
        <div>
          {data?.map(posts => {
              return(
                <div key={posts.id}>
                  <span>{posts.title}</span>
                </div>
              )  
          })}
        </div>
      )}

      <ChangePost refetch={refetch}/>

    </div>
  )
}

export const ChangePost = ({refetch}) => {
  const [addPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();
  
  const posts = [
    {
    "id":4,
    "title":"Post 4 Posted",
    "author":"Me",
    },
    {
    "id":2,
    "title":"Post 2 Posted",
    "author":"Me"
    },
    {
    "id":3,
    "title":"Post 3 Posted",
    "author":"Me"
    },
  ]
  
  const postUpdate = {
    "id":3,
    "title":"Post 3 Updated",
    "author":"Me Updated"
  }

  const handlePost = async() => {
    for(let post of posts) {
      await addPost(post);
    }
    refetch();
  }
   
  const handleDelete = async() => {
    await deletePost(4);
    refetch();
  }
  
  const handleUpdate = async() => {
    await updatePost(postUpdate);
    refetch();
  }

  return(
    <>
      <button onClick={handlePost}>Add Post</button>;
      <button onClick={handleDelete}>Delete Post</button>;
      <button onClick={handleUpdate}>Update Post</button>;
    </>
  )
}