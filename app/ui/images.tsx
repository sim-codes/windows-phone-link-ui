import Image from "next/image";
import Link from "next/link";


const images = [
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/family",
    alt: "family",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/phone",
    alt: "phone",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/car",
    alt: "car",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/food",
    alt: "food",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/macbook",
    alt: "mackbook",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/travel",
    alt: "travel",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/love",
    alt: "love",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/sea",
    alt: "sea",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/sun",
    alt: "sun",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/sunset",
    alt: "sunset",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/moon",
    alt: "moon",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/night",
    alt: "night",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/forest",
    alt: "forest",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/river",
    alt: "river",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/bridge",
    alt: "bridge",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/road",
    alt: "road",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/flower",
    alt: "flower",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/rose",
    alt: "rose",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/lotus",
    alt: "lotus",
  },
  {
    id: Math.random().toString().slice(2),
    src: "https://source.unsplash.com/random/tulip",
    alt: "tulip",
  },
]

export default function Images() {
    return (
      <div className="grid grid-cols-5 gap-4">
        {
          images.map((image) => {
            return(
              <div key={image.id} className="relative w-60 h-60 z-0">
                <Link href={`/photos/${image.alt}`}>
                  <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-md hover:" />
                </Link>
              </div>
            )
          })
        }
      </div>
    );
  }
  