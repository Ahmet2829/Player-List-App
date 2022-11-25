import { useState } from "react";
import AddUser from "./AddUser";
import Add_List from "./Add_List";
import Update_List from "./Update_List";









const Friends_List = ({ index, deleteOneBlog, updateBlog, usersList, AddUserPost, memberList }) => {
    const listsId = index.id;
    const listsName = index.name;
    const ListOfUser = index.Users;
    console.log(listsId);

    return (
        <div>
            <div className="btn-group dropend w-50">
                <button type="button" className="btn btn-light border rounded" data-bs-toggle="dropdown" aria-expanded="false">
                   <h4>{index.name}</h4>{index.date}   
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><Update_List deleteOneBlog={deleteOneBlog} listsId={listsId} listsName={listsName} updateBlog={updateBlog} /></a></li>
                    <li><a className="dropdown-item" href="#"><AddUser usersList={usersList} placement={'end'} AddUserPost={AddUserPost} listsId={listsId} /></a></li>
                    <li><hr className="dropdown-divider" /></li>

                    {memberList?.map((element, keye) => {
                        if (element.idi == index.id) {
                            return <><li><a className="dropdown-item" href="#">{element.user}</a></li></>
                        }

                    })}

                </ul>
            </div>

            <br />
            <br />










            {/* <DropdownButton className='text-center' variant="secondary" drop={"end"} title={"Morning Friends "} >
                <Dropdown.Item eventKey="1">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </DropdownButton> */}
        </div>
    )
}

export default Friends_List