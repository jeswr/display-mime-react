import React from 'react';
import type { MimeComponentProps } from '../../types';

// TODO [FUTURE]: Check https://www.ostraining.com/blog/webdesign/against-using-iframes/
export function IframeMimeDisplayer({ link, title, alt, onLoad, onError}: MimeComponentProps) {
  return (
    <iframe src={link} title={title} onLoad={onLoad} onError={onError} />
  )
}
