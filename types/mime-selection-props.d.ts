import { MimeDisplayer } from "./mime-displayer";

/**
 * Props used to select the correct mime
 * renderer
 */
export interface MimeSelectionProps {
  /**
   * Mappings between mime types and the React component
   * used to display them
   */
  mappings?: { [mime: string]: MimeDisplayer };
  /**
   * The default component used to display the MIME type
   */
  DefaultDisplay?: MimeDisplayer;
}
