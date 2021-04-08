import React from 'react';
import type { MimeComponentProps } from '../../types';

// TODO: look into lazy loading here
export function ImageMimeDisplayer({ link, title, alt, onLoad, onError}: MimeComponentProps) {
  return (
    <img src={link} title={title} alt={alt} onLoad={onLoad} onError={onError}/>
  )
}
