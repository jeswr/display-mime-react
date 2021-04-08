import React from 'react';
import { useState } from '@jeswr/use-state'
import { getType } from 'mime';
import type { DisplayMimePrimitiveProps, MimeDisplayer } from '../types'

export function DisplayMimePrimitive({
  link,
  mappings,
  onError,
  DefaultDisplay,
  ...props
}: DisplayMimePrimitiveProps) {
  let type: string | undefined | null = getType(link);
  let Display: MimeDisplayer = DefaultDisplay;
  if (type) {
    if (type in mappings) {
      Display = mappings[type];
    } else {
      type = /^[^/]*/.exec(type)?.[0];
      if (type && type in mappings) {
        Display = mappings[type];
      }
    }
  }
  const [DisplayState, setDisplayState] = useState<MimeDisplayer>(Display);
  return <DisplayState link={link} {...props} 
    onError={e => {
      /**
       * If there is an error with loading then revert the display component
       * to be the default one. If this has already been done then we propogate
       * the error
       */
      if (!(Display instanceof DefaultDisplay)) {
        setDisplayState(DefaultDisplay);
      } else {
        onError?.(e) 
      }
    }} />;
}