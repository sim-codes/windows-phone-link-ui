import MessagesHeader from "./ui/messagesHeader";
import Messages from "./ui/messages";
import Conversation from "./ui/conversation";

export default function Home() {
  return (
    <main className="flex flex-col md:grid md:grid-flow-col md:grid-cols-3">
      {/* <MessagesHeader /> */}
      <Messages />
      <div className="col-span-2">
        <Conversation />
      </div>
    </main>
  );
}
