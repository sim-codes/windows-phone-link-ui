import Link from "next/link";
import { MinusCircleIcon, MusicalNoteIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";


export function SoundButtons() {
  return (
    <div className="flex flex-col item-center">
        <div className="flex flex-row gap-2 justify-between items-center">
          <button 
          className="flex justify-center bg-[#2B2D30] w-full rounded-lg 
          border-2 border-zinc-700 p-1 cursor-default hover:bg-zinc-700">
            <MinusCircleIcon className="w-6 text-white" />
          </button>
          <button 
          className="flex justify-center bg-[#2B2D30] w-full rounded-lg 
          border-2 border-zinc-700 p-1 cursor-default hover:bg-zinc-700">
            <SpeakerWaveIcon className="w-6 text-white" />
          </button>
          <button 
          className="flex justify-center bg-[#2B2D30] w-full rounded-lg 
          border-2 border-zinc-700 p-1 cursor-default hover:bg-zinc-700">
            <MusicalNoteIcon className="w-6 text-white" />
          </button>
        </div>
    </div>
  );
}