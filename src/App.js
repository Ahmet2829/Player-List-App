import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Friends_List from './components/Friends_List';
import { getDatabase, ref, push, set, onValue, query, remove, update } from "firebase/database"
import firebase from './utils/firebase';
import Add_List from './components/Add_List';
import NavbarTop from './components/NavbarTop';
import './App.css';



function App() {
  const [lists, setLists] = useState()
  const [usersList, setUsersList] = useState()
  const [memberList, setMemberList] = useState()

  //Get The Data //////////////////////////////////
  useEffect(() => {
    const db = getDatabase(firebase);
    const blogRef = ref(db, 'lists');
    onValue(query(blogRef), snapshot => {
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      setLists(blogL)
      console.log(blogL);
    });
  }, []);
  //Add Data ///////////////////////////////////
  const AddPost = (info) => {
    const db = getDatabase(firebase);
    const postListRef = ref(db, 'lists');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name: info,
      date: Date()
    });
  }
  //Delete Data ///////////////////////////////////
  function deleteOneBlog(id) {
    const db = getDatabase();
    // const userRef = ref(db, 'blogs');
    remove(ref(db, "lists/" + id))
  }
  //Update Data ///////////////////////////////////
  function updateBlog(id, data) {
    const db = getDatabase();
    const updates = {};
    updates["lists/" + id + "/name"] = data;
    return update(ref(db), updates)
  }


  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////


  //Get The Data //////////////////////////////////
  useEffect(() => {
    // AddUserPost("Ryan Gutierrez")
    const db = getDatabase(firebase);
    const blogRef = ref(db, 'users');
    onValue(query(blogRef), snapshot => {
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      setUsersList(blogL)
    });
  }, []);



  const AddUserPost = (idi, infom) => {
    const db = getDatabase(firebase);
    const postListRef = ref(db, 'member/');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      user: infom,
      idi: idi
    });
  }


  //member alma
  useEffect(() => {
    // AddUserPost("Ryan Gutierrez")
    const db = getDatabase(firebase);
    const blogRef = ref(db, 'member');
    onValue(query(blogRef), snapshot => {
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      setMemberList(blogL)
    });
  }, []);


  console.log(memberList);





  return (
    <div className="App">


      <NavbarTop AddPost={AddPost} />
      {/* <header className="text-center">
        <h1>PLAYER LIST</h1><Add_List AddPost={AddPost} />
      </header> */}

      <br />

      {lists?.map((index, key) => {
        return <Friends_List
          AddUserPost={AddUserPost}
          index={index}
          deleteOneBlog={deleteOneBlog}
          updateBlog={updateBlog}
          usersList={usersList}
          memberList={memberList} />
      })}


    </div>
  );
}

export default App;
