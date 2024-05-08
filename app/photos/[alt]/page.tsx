import Image from "next/image";
import PhotosHeader from "../../ui/photosHeader";

export default function Page({params}: { params: { alt: string } }) {
    const alt = params.alt;
    return (
      <main className="h-auto px-5 pb-9 bg-[#202021]">
        <PhotosHeader />
        <div className="flex justify-center">
          <div className="relative bg-white w-[400px] h-[620px]">
            <Image src={`https://source.unsplash.com/random/${alt}`} layout="fill" objectFit="cover" alt={alt}/>
          </div>
        </div> 
      </main>
    );
  }
  