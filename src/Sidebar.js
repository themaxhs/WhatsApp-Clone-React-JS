import React, { useEffect, useState } from 'react';
import './Sidebar.js';
import './Sidebar.css';
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from './firebase.js';
import { useStateValue } from './StateProvider.js';
 
function Sidebar() {
     const [rooms, setRooms] = useState([]);
     const [{ user }, dispatch] = useStateValue();

     useEffect(() => {
         const unsuscribe = db.collection("room")
        db.collection('rooms').onSnapshot((snapshot) => 
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
        return () => {
            unsuscribe();
        }
     }, []);

    return (

        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">

                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>

                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>

            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder="Busca o empieza un nuevo chat" type="text" />
                </div>

            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room =>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>

        </div>
    )
}

export default Sidebar;
