# !/bin/bash

curlHealthCheck() {
  if ! curl -s --head "$1" | head -n 1 | grep -q "HTTP/1.[01] [23].."; then
    echo "URL request failed!"
    exit 1
  else
    echo "URL request succeeded!"
  fi
}

curlHealthCheck "http://localhost:3002"
# curlHealthCheck "http://<IP here>:<PORT  here>"
# curlHealthCheck "https://<IP here>:<PORT  here>"