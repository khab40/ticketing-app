#!/bin/bash

set -e

echo "Fixing security vulnerabilities in all services..."

# Fix each service
for dir in auth tickets orders payments expiration nats-test client; do
    if [ -d "$dir" ]; then
        echo "Processing $dir..."
        cd "$dir"
        rm -f package-lock.json
        npm install 2>&1 | tail -5 || true
        npm audit fix --force 2>&1 | tail -5 || true
        cd ..
        echo "$dir done."
    fi
done

echo "All services processed!"
