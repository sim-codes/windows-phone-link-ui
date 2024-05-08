import Image from "next/image";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/16/solid";


export function Status(){
    return (
        <div className="flex gap-8">
            <Image src="/images/phone.png" alt="phone" width={40} height={30} />

            <div className="">
                <div className="font-bold">Samsung</div>
                <div className="flex gap-1 my-2">
                    <Image src="/images/bluetooth.png" alt="battery" width={20} height={20} />
                    <Image src="/images/wifi.png" alt="wifi" width={20} height={20} />
                    <Image src="/images/battery.png" alt="battery" width={20} height={20} />
                    <p className="text-white text-xs font-bold">43%</p>
                </div>
                <div className="flex gap-2 justify-center bg-[#2B2D30] w-30 rounded-lg 
          border-2 border-zinc-700 p-1 cursor-default hover:bg-zinc-700">
                    <CheckCircleIcon className="w-5 text-green-500" />
                    <p className="text-white text-sm mr-2">Connected</p>
                    <ArrowPathIcon className="w-5 text-white" />
                </div>
            </div>
        </div>
    )
}