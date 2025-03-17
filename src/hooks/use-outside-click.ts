import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback(event);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback(event);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [ref, callback]);
};

