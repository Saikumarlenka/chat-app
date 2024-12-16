import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
// import {
//   arrayUnion,
//   doc,
//   getDoc,
//   onSnapshot,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import { useChatStore } from "../../lib/chatStore";
// import { useUserStore } from "../../lib/userStore";
// import upload from "../../lib/upload";
// import { format } from "timeago.js";
import sampleimage from '../images/bg.jpg'
import phone from '../images/phone.png'
import video from '../images/video.png'
import info from '../images/info.png'


const Chat = () => {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

//   const { currentUser } = useUserStore();
//   const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
//     useChatStore();

//   const endRef = useRef(null);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chat.messages]);

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
//       setChat(res.data());
//     });

//     return () => {
//       unSub();
//     };
//   }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

//   const handleSend = async () => {
//     if (text === "") return;

//     let imgUrl = null;

//     try {
//       if (img.file) {
//         imgUrl = await upload(img.file);
//       }

//       await updateDoc(doc(db, "chats", chatId), {
//         messages: arrayUnion({
//           senderId: currentUser.id,
//           text,
//           createdAt: new Date(),
//           ...(imgUrl && { img: imgUrl }),
//         }),
//       });

//       const userIDs = [currentUser.id, user.id];

//       userIDs.forEach(async (id) => {
//         const userChatsRef = doc(db, "userchats", id);
//         const userChatsSnapshot = await getDoc(userChatsRef);

//         if (userChatsSnapshot.exists()) {
//           const userChatsData = userChatsSnapshot.data();

//           const chatIndex = userChatsData.chats.findIndex(
//             (c) => c.chatId === chatId
//           );

//           userChatsData.chats[chatIndex].lastMessage = text;
//           userChatsData.chats[chatIndex].isSeen =
//             id === currentUser.id ? true : false;
//           userChatsData.chats[chatIndex].updatedAt = Date.now();

//           await updateDoc(userChatsRef, {
//             chats: userChatsData.chats,
//           });
//         }
//       });
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setImg({
//         file: null,
//         url: "",
//       });

//       setText("");
//     }
//   };
const user = {
    id: "1",
    username: "John Doe",
    avatar: "avatar.png",
  };
  
  const dummyMessages = [
    {
      senderId: "1",
      text: "Hello, how are you?",
      createdAt: new Date(),
      img: "",
    },
    {
      senderId: "2",
      text: "I'm good, thanks! How about you?",
      createdAt: new Date(),
      img: "",
    },
    {
      senderId: "1",
      text: "Just working on some code.",
      createdAt: new Date(),
      img: sampleimage,
    },
  ];
  

  return (
    <div className="chat flex flex-col border-l border-r border-[#dddddd35] h-full flex-[2]">
      <div className="top p-5 flex items-center justify-between border-b border-[#dddddd35]">
        <div className="user flex items-center gap-5">
          <img src={`/src/images/${user?.avatar || "avatar.png"}`} alt="" className="w-15 h-15 rounded-full object-cover" />
          <div className="texts flex flex-col gap-1">
            <span className="text-lg font-bold">{user?.username}</span>
            <p className="text-sm font-light text-[#a5a5a5]">Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons flex gap-5">
          <img src={phone} alt="" className="w-5 h-5" />
          <img src={video} alt="" className="w-5 h-5" />
          <img src={info}alt="" className="w-5 h-5" />
        </div>
      </div>
      <div className="center p-5 flex-1 overflow-scroll flex flex-col gap-5">
        {dummyMessages?.map((message) => (
          <div
            className={
              message.senderId === user?.id ? "message own flex gap-5 max-w-[70%] self-end" : "message flex gap-5 max-w-[70%]"
            }
            key={message?.createdAt}
          >
            <div className="texts flex flex-col gap-1 flex-1">
              {message.img && <img src={message.img} alt="" className="w-full h-72 rounded-xl object-cover" />}
              <p className="bg-[#5183fe] p-5 rounded-xl">{message.text}</p>
            </div>
          </div>
        ))}
        {img.url && (
          <div className="message own flex gap-5 max-w-[70%] self-end">
            <div className="texts flex flex-col gap-1 flex-1">
              <img src={img.url} alt="" className="w-full h-72 rounded-xl object-cover" />
            </div>
          </div>
        )}
        {/* <div ref={endRef}></div> */}
      </div>
      <div className="bottom p-5 flex items-center justify-between gap-5 mt-auto border-t border-[#dddddd35]">
        <div className="icons flex gap-5">
          <label htmlFor="file">
            <img src="/src/images/img.png" alt="" className="w-5 h-5 cursor-pointer" />
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleImg}
          />
          <img src="/src/images/camera.png" alt="" className="w-5 h-5 cursor-pointer" />
          <img src="/src/images/mic.png" alt="" className="w-5 h-5 cursor-pointer" />
        </div>
        <input
          type="text"
          // placeholder={
          //   isCurrentUserBlocked || isReceiverBlocked
          //     ? "You cannot send a message"
          //     : "Type a message..."
          // }
          value={text}
          onChange={(e) => setText(e.target.value)}
          // disabled={isCurrentUserBlocked || isReceiverBlocked}
          className="flex-1 bg-[#111928] text-white p-5 rounded-xl text-lg focus:outline-none"
        />
        <div className="emoji relative">
          <img
            src="/src/images/emoji.png"
            alt=""
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker absolute bottom-12 left-0">
            {/* <EmojiPicker open={open} onEmojiClick={handleEmoji} /> */}
          </div>
        </div>
        <button
          className="sendButton bg-[#5183fe] text-white p-2.5 px-5 rounded cursor-pointer disabled:bg-[#5182feb4] disabled:cursor-not-allowed"
        //   onClick={handleSend}
        //   disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
