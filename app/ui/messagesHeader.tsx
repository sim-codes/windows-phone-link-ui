
import { ChevronDown, ClipboardEditIcon} from "lucide-react";

export default function MessagesHeader(){
    return (
        <div className="flex flex-col">
            <div className="px-10 pt-12 flex justify-between items-center mb-2">
                <p className="text-white font-bold text-2xl mb-5">Messages</p>
                <div className="bg-[#393b3e] p-2 rounded-full h-10 w-10"><ClipboardEditIcon className="w-6 text-white"/></div>
            </div>

            <div className="w-full flex justify-center">
                <input type="text" className="bg-[#393b3e] text-white p-2 rounded-md border-b-2 border-gray-300 w-4/5 text-sm" placeholder="Search your messages" />
            </div>

            <div className="p-3 flex gap-1 text-gray-400">
                <ChevronDown className="w-6"/>
                <p>Recent</p>
            </div>
        </div>
    )
}