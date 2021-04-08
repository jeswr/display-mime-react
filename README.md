# Display Mime React

Display resources based on their mime metadata


[![GitHub license](https://img.shields.io/github/license/jeswr/display-mime-react.svg)](https://github.com/jeswr/display-mime-react/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/display-mime-react.svg)](https://www.npmjs.com/package/display-mime-react)
[![build](https://img.shields.io/github/workflow/status/jeswr/display-mime-react/Node.js%20CI)](https://github.com/jeswr/display-mime-react/tree/main/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

```tsx
import React from 'react';
import { DisplayMimePrimitive, defaultMimeMappings, IframeMimeDisplayer } from '../lib';

function App() {
  return <DisplayMimePrimitive
      mappings={defaultMimeMappings}
      link='https://avatars.githubusercontent.com/u/63333554?v=4'
      onError={console.error}
      onLoad={console.log}
      DefaultDisplay={IframeMimeDisplayer}
    />
}
```

```tsx
import React from 'react';
import { DefaultMimeDisplay } from '../lib';

function App() {
  return <DefaultMimeDisplay
      link='https://avatars.githubusercontent.com/u/63333554?v=4'
      onError={console.error}
      onLoad={console.log}
    />
}
```

## License
©2021–present
[Jesse Wright](https://github.com/jeswr),
[MIT License](https://github.com/jeswr/display-mime-react/blob/master/LICENSE).
