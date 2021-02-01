# Chromium CSP frame-ancestors referrer missing

> Upstream Chromium bug: https://crbug.com/742485

## How to reproduce

1. Install dependencies `npm install`
2. Run the script with `node index.js`
3. Go with the browser to `http://localhost:1234/a`

Expected: `cspReferrer` is filled which gets printed to the stdout
Actual: On Chromium its empty and on Firefox and WebKit filled
