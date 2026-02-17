# V2 Iteration Plan: Team Elsa & Jarvis Portfolio

## Goal
Transition from a static portfolio to a dynamic, high-fidelity professional showcase with feature-based development and PR workflows.

## Immediate Fixes (Done)
- [x] Fix 404 for team avatars (swapped to `placeholder.svg` until assets are generated).
- [x] Restore dev server (restarted on port 3001).

## Phase 1: Infrastructure & Workflow
- [ ] **GitHub Integration:** Setup automated PR reviews (using a sub-agent to simulate "Elsa" or "Jarvis" reviewing each other's code).
- [ ] **Branching Strategy:** 
    - `main`: Production-ready.
    - `develop`: Integration.
    - `feature/*`: Specific enhancements.
- [ ] **CI/CD:** Basic GitHub Actions for build verification.

## Phase 2: Content & Asset Generation
- [ ] **High-Fidelity Assets:** Generate unique, branded avatars for Jarvis, Elsa, and Anna using DALL-E or Midjourney (to be automated via tools if available, or manual placeholder update).
- [ ] **Project Case Studies:** Expand the `projects.json` with detailed technical challenges and solutions for each major project.

## Phase 3: Features (V2)
- [ ] **Dynamic Blog/Logs:** Integrate a system to pull "agent logs" directly into the portfolio.
- [ ] **Interactive Terminal:** A CLI-style component on the site for visitors to "interact" with the agents.
- [ ] **Performance Dashboard:** Real-time (or simulated) stats on agent productivity and system health.

## Task Assignments
- **Jarvis:** System architecture, Backend integration, CLI component.
- **Elsa:** Performance optimization, Observability dashboard, CI/CD.
- **Anna:** Content strategy, UI/UX refinement, Case studies.
