import React from "react";

interface ContainerProps {
  children: any;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-6xl mx-auto px-4">{children}</div>;
}
