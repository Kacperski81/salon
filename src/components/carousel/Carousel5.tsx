"use client"

import GridPager from "./gridPager";
import { CarouselItem } from "../../components/carousel/Carousel3";
import Image from "next/image";

export default function Gallery({ items }: { items: CarouselItem[] }) {
  // largest breakpoint columns = 7 (matches gallery.tsx)
  const columns = 7;

  return (
    <section className="snap-start min-h-dvh xl:min-h-screen grow-1 flex flex-col bg-(--main-400) pt-10 items-center justify-center">
      <h2 className="mt-1 mb-2 font-(family-name:--font-aboreto) self-center pt-4 pb-2 px-10 text-2xl text-(--main-100) uppercase tracking-widest">
        GALLERY
      </h2>

      <div className="w-full ">
        <GridPager
          items={items}
          rowsPerPage={2}
          columns={columns}
          // render each cell to visually match your gallery.tsx grid
          renderItem={(item) => (
            <div className="rounded-xl overflow-hidden w-full h-full">
              {/* using plain img keeps parity with gallery.tsx (you can switch to next/image if you pass static imports) */}
              <img
                src={typeof item.imageUrl === "string" ? item.imageUrl : (item.imageUrl as any).src ?? ""}
                alt={item.alt ?? item.id}
                className="w-full h-full object-cover block"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}