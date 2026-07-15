"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function SplashProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}