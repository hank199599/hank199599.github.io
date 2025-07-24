"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface FacebookPostProps {
  postId: string;
  showText?: boolean;
}

export const FacebookPost = ({ postId, showText = true }: FacebookPostProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined' && !window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            appId: 'your-app-id', // You can leave this empty for public posts
            xfbml: true,
            version: 'v18.0'
          });
          
          // Parse the Facebook elements
          window.FB.XFBML.parse(containerRef.current);
        }
      };
    } else if (window.FB) {
      // If FB is already loaded, just parse the new elements
      window.FB.XFBML.parse(containerRef.current);
    }

    // Observer to modify Facebook iframe when it's created
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const iframe = containerRef.current?.querySelector('iframe');
          if (iframe) {
            // Force iframe to fill container width
            iframe.style.width = '100%';
            iframe.style.maxWidth = '100%';
            iframe.style.minWidth = '100%';
            
            // Also try to modify the parent span if it exists
            const parentSpan = iframe.parentElement;
            if (parentSpan && parentSpan.tagName === 'SPAN') {
              parentSpan.style.width = '100%';
              parentSpan.style.maxWidth = '100%';
              parentSpan.style.display = 'block';
            }
          }
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [postId]);

  const currentTheme = resolvedTheme || theme;
  const isDarkMode = currentTheme === "dark";

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{
        // Apply CSS filter for dark mode - invert colors
        filter: isDarkMode ? "invert(1) hue-rotate(180deg)" : "none",
        // Ensure the container has proper background
        backgroundColor: "transparent",
        display: "block",
        width: "100%",
      }}
    >
      <div
        className="fb-post w-full"
        data-href={`https://www.facebook.com/GDGTaipei/posts/${postId}`}
        data-width="100%"
        data-show-text={showText}
        style={{
          // Make the Facebook post fill the entire container
          width: "100% !important",
          maxWidth: "100% !important",
          margin: "0 !important",
          padding: "0",
          display: "block",
          // Counter-invert any images or icons that shouldn't be inverted
          filter: isDarkMode ? "invert(1) hue-rotate(180deg)" : "none",
        }}
      ></div>
      
      <style jsx>{`
        :global(.fb-post) {
          width: 100% !important;
          max-width: 100% !important;
        }
        :global(.fb-post iframe) {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 100% !important;
        }
        :global(.fb-post span) {
          width: 100% !important;
          max-width: 100% !important;
          display: block !important;
        }
      `}</style>
    </div>
  );
};

// Extend Window interface to include FB
declare global {
  interface Window {
    FB: {
      init: (params: { appId?: string; xfbml: boolean; version: string }) => void;
      XFBML: {
        parse: (element?: HTMLElement | null) => void;
      };
    };
  }
}