import Link from "next/link";
export function Notifications() {
  return (
    <div className="flex flex-col item-center h-full">
        <div className="flex flex-row justify-between">
            <p className="text-xl text-white">Notifications!</p>
            <Link href="#" className="text-sm text-gray-500">Clear all</Link>
        </div>
        <p className="text-sm text-white text-center m-5">Now new notifications</p>      
    </div>
  );
}