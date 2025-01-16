# Node.js Server Crash on Premature Client Disconnection

This repository demonstrates a common issue in Node.js servers where the server crashes when a client abruptly closes the connection before the server has finished sending the response.  The problem arises because the server attempts to write to a socket that has already been closed.

## Bug

The `server.js` file contains the buggy code.  Running this server and then closing the connection from the client will cause the server to crash.

## Solution

The `serverSolution.js` file provides a solution. It adds a check to ensure the socket is not destroyed before writing the response. This prevents the server from crashing.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node server.js`.
4. Use a tool like `curl` or a web browser to make a request to `http://localhost:3000`. 
5. Close the connection before the server completes the response (e.g., by pressing Ctrl+C in the terminal).
6. Observe that the server crashes.
7. Repeat steps 3-5 with `serverSolution.js` to see the fixed version.