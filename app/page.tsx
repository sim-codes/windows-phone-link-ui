import MessagesHeader from "./ui/messagesHeader";
import Conversation from "./ui/conversation";

export default function Home() {
  return (
    <main className="h-[735px] grid grid-flow-col grid-cols-3">
      <MessagesHeader />
      <Conversation />
    </main>
  );
}
