"use client"

import React, { useMemo, useState } from "react";

type GridPagerProps<T> = {
  items: T[];
  // how many rows per page (you asked for 2)
  rowsPerPage?: number;
  // maximum columns per page at largest breakpoint (we'll use this to compute page size)
  columns?: number;
  // render function for a single cell
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  // optional custom grid classes (useful for responsive columns)
  gridClass?: string;
  // optional show/hide controls labels
  prevLabel?: string;
  nextLabel?: string;
};

export default function GridPager<T>({
  items,
  rowsPerPage = 2,
  columns = 7,
  renderItem,
  className,
  gridClass = "grid grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3",
  prevLabel = "Prev",
  nextLabel = "Next",
}: GridPagerProps<T>) {
  // pageSize uses the largest breakpoint columns value
  const pageSize = rowsPerPage * columns;

  const pages = useMemo(() => {
    const out: T[][] = [];
    for (let i = 0; i < items.length; i += pageSize) {
      out.push(items.slice(i, i + pageSize));
    }
    return out;
  }, [items, pageSize]);

  const [page, setPage] = useState(0);

  const canPrev = page > 0;
  const canNext = page < pages.length - 1;

  const goPrev = () => { if (canPrev) setPage(p => p - 1); };
  const goNext = () => { if (canNext) setPage(p => p + 1); };

  // style helpers for sliding pages
  const trackStyle: React.CSSProperties = {
    display: "flex",
    width: `${pages.length * 100}%`,
    transform: `translateX(-${page * (100 / pages.length)}%)`,
    transition: "transform 450ms ease",
  };

  const pageStyle: React.CSSProperties = {
    flex: "0 0 100%",
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      {/* track (pages) */}
      <div className="overflow-hidden w-full">
        <div style={trackStyle}>
          {pages.map((pageItems, pi) => (
            <div key={pi} style={pageStyle} className="px-2">
              {/* use responsive grid classes so layout matches gallery.tsx */}
              <div className={gridClass}>
                {pageItems.map((it, i) => (
                  <div key={i} className="w-full h-full">
                    {renderItem(it, pi * pageSize + i)}
                  </div>
                ))}
                {/* fill empty cells so grid alignment is stable */}
                {Array.from({ length: pageSize - pageItems.length }).map((_, k) => (
                  <div key={`empty-${k}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      {pages.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={goPrev}
            disabled={!canPrev}
            className="px-3 py-1 rounded bg-(--main-700) text-white disabled:opacity-40"
            aria-label="Previous page"
          >
            {prevLabel}
          </button>
          <div className="text-sm text-(--main-100)">
            {page + 1} / {pages.length}
          </div>
          <button
            onClick={goNext}
            disabled={!canNext}
            className="px-3 py-1 rounded bg-(--main-700) text-white disabled:opacity-40"
            aria-label="Next page"
          >
            {nextLabel}
          </button>
        </div>
      )}
    </div>
  );
}