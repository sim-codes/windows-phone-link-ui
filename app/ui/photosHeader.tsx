import Link from "next/link";
import { ArrowLeftIcon, FolderOpenIcon,
    TrashIcon,
    ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { ShareIcon, ClipboardEditIcon, MoreHorizontalIcon } from "lucide-react";
import clsx from "clsx";

export default function PhotosHeader() {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <Link href="/photos" className="flex text-wrap gap-2 items-center text-gray-500 text-sm hover:bg-[#2B2D30] hover:rounded-md md:p-2">
                    <ArrowLeftIcon className="h-4 w-4"/>
                    Back to photos
                </Link>

                <div className="md:flex justify-center gap-3 hidden">
                    <Link href="#" className="flex gap-2 items-center text-white text-sm hover:bg-[#2B2D30] hover:rounded-md p-2">
                        <ClipboardEditIcon className="h-4 w-4"/>
                        Open
                    </Link>

                    <Link href="#" className="flex gap-2 items-center text-white text-sm hover:bg-[#2B2D30] hover:rounded-md p-2">
                        <ClipboardDocumentCheckIcon className="h-4 w-4"/>
                        Copy
                    </Link>

                    <Link href="#" className="flex gap-2 items-center text-white text-sm hover:bg-[#2B2D30] hover:rounded-md p-2">
                        <ShareIcon className="h-4 w-4"/>
                        Share
                    </Link>

                    <Link href="#" className="flex gap-2 items-center text-white text-sm hover:bg-[#2B2D30] hover:rounded-md p-2">
                        <TrashIcon className="h-4 w-4"/>
                        Delete
                    </Link>

                    <Link href="#" className="flex gap-2 items-center text-white text-sm hover:bg-[#2B2D30] hover:rounded-md p-2">
                        <MoreHorizontalIcon className="h-4 w-4"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}