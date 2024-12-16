import { useEffect, useState } from "react";
// import AddUser from "./addUser/addUser";
// import { useUserStore } from "../../../lib/userStore";
// import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
// import { db } from "../../../lib/firebase";
// import { useChatStore } from "../../../lib/chatStore";
import searchion from '../../images/search.png'
import plusicon from '../../images/plus.png'
import minusicon from '../../images/minus.png'
import avataricon from '../../images/avatar.png'
const filteredChats = [
    {
      chatId: 1,
      user: {
        username: "JohnDoe",
        avatar: "./avatar.png",
        blocked: [],
      },
      isSeen: false,
      lastMessage: "Hey, how's it going?",
    },
    {
      chatId: 2,
      user: {
        username: "JaneSmith",
        avatar: "./avatar.png",
        blocked: ["userId123"],
      },
      isSeen: true,
      lastMessage: "Are we still on for tomorrow?",
    },
    {
      chatId: 3,
      user: {
        username: "AliceJones",
        avatar: "./avatar.png",
        blocked: [],
      },
      isSeen: false,
      lastMessage: "Let's meet for coffee soon!",
    },
  ];

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [input, setInput] = useState("");

//   const { currentUser } = useUserStore();
//   const { chatId, changeChat } = useChatStore();

//   useEffect(() => {
//     const unSub = onSnapshot(
//       doc(db, "userchats", currentUser.id),
//       async (res) => {
//         const items = res.data().chats;

//         const promises = items.map(async (item) => {
//           const userDocRef = doc(db, "users", item.receiverId);
//           const userDocSnap = await getDoc(userDocRef);

//           const user = userDocSnap.data();

//           return { ...item, user };
//         });

//         const chatData = await Promise.all(promises);

//         setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
//       }
//     );

//     return () => {
//       unSub();
//     };
//   }, [currentUser.id]);

//   const handleSelect = async (chat) => {
//     const userChats = chats.map((item) => {
//       const { user, ...rest } = item;
//       return rest;
//     });

//     const chatIndex = userChats.findIndex(
//       (item) => item.chatId === chat.chatId
//     );

//     userChats[chatIndex].isSeen = true;

//     const userChatsRef = doc(db, "userchats", currentUser.id);

//     try {
//       await updateDoc(userChatsRef, {
//         chats: userChats,
//       });
//       changeChat(chat.chatId, chat.user);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const filteredChats = chats.filter((c) =>
//     c.user.username.toLowerCase().includes(input.toLowerCase())
//   );

  return (
    <div className="flex-1">
      <div className="flex items-center gap-5 p-5">
        <div className="flex-1 bg-[rgba(17,25,40,0.5)] flex items-center gap-5 rounded-lg p-2">
          <img src={searchion} alt="" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-white flex-1"
          />
        </div>
        <img
          src={addMode ? minusicon : plusicon}
          alt=""
          className="w-10 h-10 bg-[rgba(17,25,40,0.5)] p-2 rounded-lg cursor-pointer"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {filteredChats.map((chat) => (
        <div
          className="flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]"
          key={chat.chatId}
        //   onClick={() => handleSelect(chat)}
          style={{
            backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
          }}
        >
          <img
            src={avataricon}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <span className="font-medium">
             {chat.user.username}
            </span>
            <p className="text-sm font-light">{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {/* {addMode && <AddUser />} */}
    </div>
  );
};

export default ChatList;
