import { useEffect, useState } from "react";

export default  function useGetUserById(userId){
    const [posts, setPosts]=useState([])
    const [user, setUser]=useState({})
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(null)

    useEffect(()=>{
        async function fetchData(){
         setLoading(true)
          try{
             const [userRes, postRes]=await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${userId}`), fetch(`https://jsonplaceholder.typicode.com/posts`)])
           if(!userRes.ok||!postRes.ok) throw new Error('Something Went Wrong When Fetching')

            const userData=await userRes.json()
            const postData=await postRes.json()
            console.log()
            console.log("USERTTTTTTTTTTTT:", userData)
            console.log("Posaaaaaaaaaaaaaaa", postData.filter(post=>post.userId===userId))
            setUser(userData)
            setPosts(postData.filter(post=>post.userId===userId))
          }catch(err){
            setError(err)

          }finally{
            setLoading(false)
          }
        
        }
          fetchData()
    },[userId])




    return{user, posts, loading , error}

}