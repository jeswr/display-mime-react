import type React from 'react';

/**
 * The props required for a mime display function
 */
export interface MimeComponentProps {
  /**
   * Link to MIME resource
   */
  link: string
  /**
   * Title of the resource
   */
  title?: string;
  /**
   * Alternative text describing the resource
   */
  alt?: string;
  /**
   * Hook for load events
   */
  onLoad?: (event: React.SyntheticEvent<HTMLElement, Event>) => void
  /**
   * Hook for error events
   */
  onError?: (event: React.SyntheticEvent<HTMLElement, Event>) => void
}
