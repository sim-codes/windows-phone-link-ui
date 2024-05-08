'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
    PhoneIcon,
    ChatBubbleBottomCenterTextIcon,
    PhotoIcon,
  } from '@heroicons/react/24/outline';
import { link } from "fs/promises";


const links = [
    {
        name: 'Messages',
        href: '/',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Photos',
        href: '/photos',
        icon: PhotoIcon,
    },
    {
        name: 'Calls',
        href: '/calls',
        icon: PhoneIcon,
    },
];


export function Header() {
    const pathname = usePathname();
  return (
    <div className="flex flex-col item-center w-full pt-10">
        <div className="flex gap-3">
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link href={link.href}
                        key={link.name} className={clsx("grid h-12 gap-1 p-3", {
                            "hover:bg-[#2B2D30] hover:rounded-md": pathname !== link.href,
                        })}>
                            <div className="flex gap-1 items-center">
                                <LinkIcon className="w-6 text-white" />
                                <p className="text-sm font-medium text-white">{link.name}</p>
                            </div>
                            <span className={clsx("bg-white h-1 w-5 rounded-sm justify-self-center",
                            {
                                'hidden': pathname !== link.href,
                            },
                            )}></span>
                        </Link>
                    );
                })
            }
      </div>
    </div>
  );
}