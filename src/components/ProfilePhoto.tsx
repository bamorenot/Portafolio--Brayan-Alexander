import Image from "next/image";
import { profile } from "@/data/profile";

export function ProfilePhoto() {
  return (
    <div className="float relative mx-auto aspect-square w-56 sm:w-72">
      <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan/40 via-violet/30 to-transparent blur-2xl" aria-hidden="true" />
      <div className="relative size-full overflow-hidden rounded-full border border-white/15 bg-space-800/80 p-1.5">
        <div className="relative size-full overflow-hidden rounded-full">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="(min-width: 640px) 18rem, 14rem"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
}
