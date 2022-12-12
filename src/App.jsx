import React, { useState, useEffect } from "react";
import AllPosts from "./components/AllPosts";
import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { getPosts } from "./api/api";
import Register from "./components/Register";
import CreateNewPost from "./components/NewPost";
import Login from "./components/Login";
import SearchForm from "./components/Search"




// const App = () => {

//   const [posts, setPosts] = useState([]);



//   useEffect(() => {
//     getPosts(setPosts);
//     fetch('/posts')
//       .then(response => response.json())
//       .then(data => setPosts(data))
//       .catch(error => console.log(error));
//   }, [])

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  // return (
  //   <div>
  //     {posts.length === 0 && (
  //       <p>Loading posts...</p>
  //     )}
  //     {posts.length > 0 && (
  //       <>
  //         <SearchForm posts={posts} setPosts={setPosts} />
  //         {posts.map(post => (
  //           <div key={post.title}>
  //             <h1>{post.title}</h1>
  //             <p>{post.description}</p>
  //           </div>
  //         ))}
  //       </>
  //     )}
  //   </div>
  // );





  // console.log("App Page Api ", posts)

  return (
    <>
      {/* <Header />
      <div>
      <div>
      <SearchForm posts={posts} setPosts={setPosts} />
      {posts.map(post => (
        <div key={post.title}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
    </div> */}
        {/* <CreateNewPost />
        <Login />
        <Register />
        <AllPosts allPosts={posts} /> */}
        <Routes>
          <Route exact path="/" element={<AllPosts allPosts={posts} />}></Route>
          {/* <Route path="/profile" element={<Profile />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newpost" element={<CreateNewPost allPosts={posts}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>

      </div>



    </>

  );


      }


export default App;

/* - This exports to main.jsx. Lots of functionality to go here. useEffects, useStates, call components.



*/
