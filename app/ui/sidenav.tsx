import Link from 'next/link';
import { SoundButtons } from './soundbutton';
import { Status } from './status';

import { Notifications } from './notifications';
export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-[#202021] p-5">
        <div className="flex flex-col gap-8 mb-8 text-white rounded-md">
            <Status />
            <SoundButtons />
        </div>
      <div 
      className="flex grow flex-row border-t-2 pt-5 border-[#2B2D30] justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Notifications />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
      </div>
    </div>
  );
}
