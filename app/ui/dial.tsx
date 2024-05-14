import {UserIcon} from '@heroicons/react/24/outline';

import DialButtons from "./dialButtons";

export default function Dial(){
    return (
        <div className="h-full flex flex-col gap-2 items-center md:fixed right-0">
            <input type="text" className="bg-[#393b3e] text-white p-2 rounded-md my-10 border-b-2 border-white w-2/3 text-sm focus:outline-none" placeholder="Search your contacts" />

            <div className="bg-[#393b3e] h-20 w-20 rounded-full flex items-center justify-center">
                <UserIcon className="w-10 text-white" />
            </div>

            <DialButtons />
            
        </div>
    );
}