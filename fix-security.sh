#!/bin/bash

set -e

echo "Fixing security vulnerabilities in all services..."

# Fix each service
for dir in auth tickets orders payments expiration nats-test client; do
    if [ -d "$dir" ]; then
        echo "Processing $dir..."
        cd "$dir"
        # First ensure we have dependencies installed
        npm install --legacy-peer-deps 2>&1 | tail -3 || true
        # Then fix vulnerabilities
        npm audit fix --force --legacy-peer-deps 2>&1 | tail -5 || true
        cd ..
        echo "$dir done."
    fi
done

echo "All services processed!"
