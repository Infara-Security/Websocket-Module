addModule("webSocket",
    () => { //activate

        // Initialize the module within the launcher's namespace
        window[launcher.config.name].webSocket = {

            /**
             * Intercept WebSocket messages and log them before passing to the original handler.
             * @param {WebSocket} webSocket - The WebSocket object to intercept messages for.
             */
            interceptMessages : (webSocket) => {
                // Store the original onmessage handler of the WebSocket
                const originalOnMessage = webSocket.onmessage;

                // Replace the onmessage handler with a new function
                webSocket.onmessage = function(event) {
                    // Log the received WebSocket message to the console
                    window[launcher.config.name].logger.log('Received WebSocket message:', event.data);

                    // Call the original onmessage handler to process the message
                    originalOnMessage.call(this, event);
                };
            }
        }
    },
    () => { //deactivate
        // When the module is deactivated, remove the module from the launcher's namespace
        delete window[launcher.config.name].webSocket;
    }
);
