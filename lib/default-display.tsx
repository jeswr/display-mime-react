import React from "react";
import { DisplayMimePrimitiveProps } from "../types";
import { defaultMimeMappings } from "./default-mappings";
import { DisplayMimePrimitive } from "./display";
import { IframeMimeDisplayer } from "./displayers";

export function DefaultMimeDisplay(props: Partial<DisplayMimePrimitiveProps> & { link: string }) {
  return <DisplayMimePrimitive
      mappings={defaultMimeMappings}
      onError={console.error}
      onLoad={console.log}
      DefaultDisplay={IframeMimeDisplayer}
      {...props}
    />
}