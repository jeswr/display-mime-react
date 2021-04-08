import { MimeComponentProps } from "./mime-component-props";
import { MimeSelectionProps } from "./mime-selection-props";

export * from './mime-component-props';
export * from './mime-displayer';
export * from './mime-selection-props';

export type DisplayMimeProps = MimeComponentProps & MimeSelectionProps;
export type DisplayMimePrimitiveProps = MimeComponentProps & Required<MimeSelectionProps>;
