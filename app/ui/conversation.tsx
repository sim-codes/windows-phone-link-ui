import { Mails } from "lucide-react";

export default function Conversation() {
    return (
        <div className="col-span-2 h-full w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Mails className=" w-96 h-96 text-white"/>
                <p className="text-white">Start conversation</p>
            </div>
        </div>
    )
}