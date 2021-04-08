import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { DisplayMimePrimitive, defaultMimeMappings, IframeMimeDisplayer } from '../lib'

expect.extend(toHaveNoViolations);

describe('Testing the accessibility of fields', () => {
  it('Should have no violations when rendering any field', async () => {
    const { container } = render(<DisplayMimePrimitive
      mappings={defaultMimeMappings}
      link='https://avatars.githubusercontent.com/u/63333554?v=4'
      onError={console.error}
      onLoad={console.log}
      DefaultDisplay={IframeMimeDisplayer}
    />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  }, 30000);
});
