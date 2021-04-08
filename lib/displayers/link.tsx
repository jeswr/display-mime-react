import React from 'react';
import type { MimeComponentProps } from '../../types';

// TODO: Refactor into its own module and address security isues
export function LinkMimeDisplayer({ link, title, alt, onLoad, onError }: MimeComponentProps) {
  return (
    <a href={link} target='_blank' rel='noreferrer' onLoad={onLoad} onError={onError}>
      {title ?? link}
    </a>
  );
}