"use client";

import { useEffect, useState } from "react";

interface ClientBodyProps {
  children: React.ReactNode;
}

export function ClientBody({ children }: ClientBodyProps) {
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    setIsDev(process.env.NODE_ENV === "development");
  }, []);

  return (
    <body
      className={`bg-black ${isDev ? "debug-screens" : ""}`}
      suppressHydrationWarning={true}
    >
      {children}
    </body>
  );
}
