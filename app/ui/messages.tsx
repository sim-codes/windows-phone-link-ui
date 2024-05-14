import { Chats } from "../lib/data";
import MessagesHeader from "./messagesHeader";
import { ChevronDown} from "lucide-react";


export default function Messages() {
    return (
        <div className="col-span-1 h-full w-full">
                <div className="w-full h-full overflow-y-scroll">
                <MessagesHeader />
                    <div className="md:mt-40">
                        <div className="p-3 flex gap-1 text-gray-400">
                            <ChevronDown className="w-6"/>
                            <p>Recent</p>
                        </div>
                    {Chats.map((chat, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border-b border-gray-800">
                            <div className="flex items-center gap-2">
                                <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
                                <div>
                                    <p className="text-white font-bold">{chat.name}</p>
                                    <p className="text-gray-400">{chat.message}</p>
                                </div>
                            </div>
                            <p className="text-gray-400">{chat.time}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
    )
}