import {addDoc, collection, serverTimestamp, onSnapshot, query} from "firebase/firestore"
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

export const Chat = (props) => {
    const {room} = props
    const [newMessage, setNewMessage] = useState("")
    const messageRef = collection(db, "messages")
    const [messages,setMessages] = useState([])

    useEffect(() => {
        const queryMessages = query(messageRef,where("room", "==", rooms), orderBy("createdAt"))
        const unsubscibe = onSnapshot(queryMessages, (snapShot) => {
            let messages = []
            snapShot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return() => unsubscibe()
    },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newMessage)
        if (newMessage == "") return
        
        await addDoc(messageRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })
    }
    return <div className="chat-app">
        <div className="header">
            <h1>Welcome to: {room.toUpperCase()}</h1>
        </div>

        <div className="messages">
            {messages.map((message) => {
                <div className="message" key={messages.id}>
                    <span className="user">{messages.user}</span>
                    {message.text}
                </div>
            })}
        </div>
        <form onSubmit={handleSubmit} className="new-message-form">
            <input
                className="new-message-input"
                placeholder="Type your message here..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
            />
            <button type="submit" className="send-button">
                Send
            </button>
        </form>
    </div>;
};