"use client";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  useTheme();

  return <>{children}</>;
}
