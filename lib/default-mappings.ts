import type { MimeDisplayer } from '../types';
import * as Displayers from './displayers';

export const defaultMimeMappings: { [mime: string]: MimeDisplayer } = {
  audio: Displayers.AudioMimeDisplayer,
  image: Displayers.ImageMimeDisplayer,
  text: Displayers.LinkMimeDisplayer,
  video: Displayers.IframeMimeDisplayer,
};
