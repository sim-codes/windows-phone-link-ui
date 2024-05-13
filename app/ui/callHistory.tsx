import { UserCircleIcon, PhoneArrowUpRightIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline"
import { CallLogs } from "../lib/data"

export default function CallHistory(){
    return (
        <div className="">
            {
                CallLogs.map((call, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-[#393b3e]">
                        <div className="flex items-center gap-2 px-8">
                            <UserCircleIcon className="w-10" />
                            <div>
                                <p className="font-bold">{call.name}</p>
                                <div className="flex gap-1 text-sm text-gray-500">
                                    {
                                        call.type === "Incoming" ?
                                        <PhoneArrowDownLeftIcon className="w-5" /> : 
                                        <PhoneArrowUpRightIcon className="w-5" />
                                    }
                                    
                                    <p>{call.type}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{call.date} at {call.time}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}