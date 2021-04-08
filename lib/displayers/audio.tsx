import React from 'react';
import type { MimeComponentProps } from '../../types';

export function AudioMimeDisplayer({ link, title, onLoad, onError}: MimeComponentProps) {
  return <audio src={link} title={title} onLoad={onLoad} onError={onError} />
}
