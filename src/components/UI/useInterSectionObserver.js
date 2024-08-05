import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useIntersectionObserver = (elementsSelector, callback, callback2) => {
  const router = usePathname();

  const handleRouteChange = () => {
    const elements = document.querySelectorAll(elementsSelector);
    elements.forEach((element) => {
      element.classList.remove("show");
    });
    initializeObserver();
  };
  const initializeObserver = () => {
    const elements = document.querySelectorAll(elementsSelector);
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          // observer.unobserve(entry.target);
        } else {
          callback2(entry);
        }
      });
    });

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  };
  useEffect(() => {
    if (typeof window === "undefined") return;

    initializeObserver();
  }, [elementsSelector, callback, callback2, router]);
  useEffect(() => {
    handleRouteChange();
  }, [router]);
};

export default useIntersectionObserver;
