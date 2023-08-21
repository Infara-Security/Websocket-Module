# WebSocket Module
## Requires [Module-Launcher](https://github.com/Infara-Security/Module-Launcher) <br>

The WebSocket module allows you to intercept WebSocket messages and log them before passing them to the original handler. This can be useful for debugging WebSocket communication within your application. This readme provides an overview of the functionality and usage of the WebSocket module.

## Introduction
The WebSocket module provides a method to intercept WebSocket messages and log their content before allowing the messages to be processed by the original message handler. This can help you monitor WebSocket communication and diagnose issues during development.

## Usage

### Intercepting WebSocket Messages
To intercept WebSocket messages and log them:
```javascript
// Get a reference to the WebSocket object
const webSocket = new WebSocket('ws://example.com');

// Intercept WebSocket messages and log them
window[launcher.config.name].webSocket.interceptMessages(webSocket);
```
