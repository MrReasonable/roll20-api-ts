# Roll20 API TypeScript Type Definitions

[![npm version](https://img.shields.io/npm/v/roll20-api-ts.svg)](https://www.npmjs.com/package/roll20-api-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This package provides comprehensive TypeScript type definitions for the Roll20 API, making it easier to develop Roll20 API scripts with TypeScript.

## Features

- Complete TypeScript definitions for all Roll20 API objects, functions, events, and utility functions
- Strongly typed interfaces for all Roll20 objects (Campaign, Page, Graphic, Character, etc.)
- Type definitions for global functions like `createObj`, `getObj`, `findObjs`, etc.
- Event handling type definitions for `on()` function
- Utility type definitions to improve development experience

## Installation

```bash
npm install @types/roll20-api-ts-types --save-dev
```

Or with yarn:

```bash
yarn add @types/roll20-api-ts-types --dev
```

Or with pnpm:

```bash
pnpm add @types/roll20-api-ts-types -D
```

## Usage

Once installed, you can import the types in your TypeScript files:

```typescript
import { Roll20Object, Character, Graphic } from '@types/roll20-api-ts-types';

// Listen for token changes
on('change:graphic', (obj: Roll20Object<Graphic>, prev: Partial<Graphic>) => {
  // Your code here with full type safety
});

// Create a new character
const character = createObj('character', {
  name: 'New Character',
  bio: 'A fresh character'
}) as Roll20Object<Character>;
```

### Example: Creating a Simple API Script

```typescript
// MyApiScript.ts
import { Roll20Object, Graphic } from '@types/roll20-api-ts-types';

// Register a function to run when the API is ready
on('ready', () => {
  log('MyApiScript loaded!');
});

// Listen for chat messages
on('chat:message', (msg) => {
  if (msg.type !== 'api') return;
  
  if (msg.content.startsWith('!move')) {
    // Find a token by name
    const tokens = findObjs({
      _type: 'graphic',
      name: 'MyToken'
    }) as Roll20Object<Graphic>[];
    
    if (tokens.length > 0) {
      const token = tokens[0];
      // Move the token 70 pixels to the right
      token.set({
        left: token.get('left') + 70
      });
    }
  }
});
```

## About Roll20 API

The Roll20 API provides a powerful way to customize and enhance your Roll20 games. With the API, you can write scripts that can:

- Manipulate tokens, characters, and other objects on the tabletop
- Respond to events during gameplay
- Create custom commands for players to use in chat
- Automate common tasks and game mechanics
- Integrate with macros and character sheets

The Roll20 API uses JavaScript and requires a Pro subscription to Roll20. These type definitions make it easier to develop API scripts using TypeScript, providing better tooling, autocompletion, and type safety.

## Documentation

For more information about the Roll20 API itself, see the official Roll20 documentation:

- [API Introduction](https://wiki.roll20.net/API:Introduction)
- [API Objects](https://help.roll20.net/hc/en-us/articles/360037772793-API-Objects)
- [API Function Documentation](https://help.roll20.net/hc/en-us/articles/360037772833-API-Function-Documentation)
- [API Events](https://help.roll20.net/hc/en-us/articles/360037772813-API-Events)
- [API Utility Functions](https://help.roll20.net/hc/en-us/articles/360037256774-API-Utility-Functions)
- [API Cookbook](https://wiki.roll20.net/API:Cookbook)

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, please open an issue or submit a pull request on [GitHub](https://github.com/MrReasonable/roll20-api-ts-types).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
