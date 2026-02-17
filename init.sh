#!/bin/bash

# =============================================================================
# Team Elsa & Jarvis Portfolio - Development Environment Setup Script
# =============================================================================
# This script sets up and starts the Next.js development environment.
# =============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║       Team Elsa & Jarvis Portfolio - Setup Script        ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Determine script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR"

echo -e "${BLUE}📁 Project root: ${PROJECT_ROOT}${NC}"
echo ""

# Check if Next.js app directory exists
APP_DIR="$PROJECT_ROOT/portfolio-app"

if [ ! -d "$APP_DIR" ]; then
  echo -e "${YELLOW}⚠️  Next.js app not found at: $APP_DIR${NC}"
  echo -e "${YELLOW}   The app may not be initialized yet. Run the build agent first.${NC}"
  APP_DIR="$PROJECT_ROOT"
fi

# Check Node.js is installed
echo -e "${BLUE}🔍 Checking prerequisites...${NC}"

if ! command -v node &> /dev/null; then
  echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org${NC}"
  exit 1
fi

NODE_VERSION=$(node --version)
echo -e "${GREEN}✅ Node.js found: ${NODE_VERSION}${NC}"

if ! command -v npm &> /dev/null; then
  echo -e "${RED}❌ npm is not installed. Please install npm.${NC}"
  exit 1
fi

NPM_VERSION=$(npm --version)
echo -e "${GREEN}✅ npm found: ${NPM_VERSION}${NC}"
echo ""

# Navigate to app directory
cd "$APP_DIR"

# Check if package.json exists (Next.js app is initialized)
if [ ! -f "package.json" ]; then
  echo -e "${YELLOW}📦 Initializing new Next.js project...${NC}"
  echo ""

  # Create Next.js app with TypeScript and Tailwind
  npx create-next-app@latest . \
    --typescript \
    --tailwind \
    --eslint \
    --app \
    --src-dir=false \
    --import-alias="@/*" \
    --no-git \
    --yes

  echo ""
  echo -e "${GREEN}✅ Next.js project initialized!${NC}"

  # Install additional dependencies
  echo ""
  echo -e "${BLUE}📦 Installing additional dependencies...${NC}"

  # Core dependencies
  npm install next-themes lucide-react clsx tailwind-merge

  # Shadcn UI dependencies
  npm install @radix-ui/react-slot class-variance-authority

  echo -e "${GREEN}✅ Additional dependencies installed!${NC}"

else
  echo -e "${BLUE}📦 Installing dependencies...${NC}"
  npm install
  echo -e "${GREEN}✅ Dependencies installed!${NC}"
fi

echo ""

# Check if the app structure is set up
if [ ! -f "app/page.tsx" ]; then
  echo -e "${YELLOW}⚠️  App pages not yet created. The next coding agent will create them.${NC}"
fi

# Start the development server
echo -e "${CYAN}🚀 Starting the development server...${NC}"
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                  Application Access Info                 ║${NC}"
echo -e "${GREEN}╠══════════════════════════════════════════════════════════╣${NC}"
echo -e "${GREEN}║  Local:    http://localhost:3000                          ║${NC}"
echo -e "${GREEN}║  Network:  http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo "0.0.0.0"):3000   ║${NC}"
echo -e "${GREEN}╠══════════════════════════════════════════════════════════╣${NC}"
echo -e "${GREEN}║  Pages:                                                   ║${NC}"
echo -e "${GREEN}║    Home:       http://localhost:3000/                    ║${NC}"
echo -e "${GREEN}║    Portfolio:  http://localhost:3000/portfolio            ║${NC}"
echo -e "${GREEN}║    Resources:  http://localhost:3000/resources            ║${NC}"
echo -e "${GREEN}╠══════════════════════════════════════════════════════════╣${NC}"
echo -e "${GREEN}║  Press Ctrl+C to stop the server                         ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Start Next.js dev server
npm run dev
