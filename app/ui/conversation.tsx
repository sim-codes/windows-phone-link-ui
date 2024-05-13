import { Mails } from "lucide-react";

export default function Conversation() {
    return (
        <div className="h-full w-1/2 flex justify-center items-center fixed">
            <div className="flex flex-col justify-center items-center">
                <Mails className=" w-96 h-96 text-white"/>
                <p className="text-white">Start conversation</p>
            </div>
        </div>
    )
}