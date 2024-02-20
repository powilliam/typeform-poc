"use client";

import { Widget } from "@typeform/embed-react";

export type TypeformProps = {
  id: string;
  hidden?: Record<string, any>;
};

export default function Typeform(props: TypeformProps) {
  return <Widget fullScreen {...props} />;
}
