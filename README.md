# Project ZA

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status: Pre-Alpha](https://img.shields.io/badge/status-pre--alpha-red.svg)
![Tech: Vite + React + TypeScript](https://img.shields.io/badge/tech-Vite%20%7C%20React-blue)

Project ZA is an ambitious, AI-powered, text-based RPG set in a zombie apocalypse. It aims to deliver a deeply immersive and dynamic narrative experience, powered by modern language models and a unique, narrative-focused LitRPG system.

> ⚠️ **This project is in its infancy.** The code is in a pre-alpha state and under heavy development. Core mechanics are still being designed and implemented. This repository is currently for those interested in the underlying technology and the development process from the ground up.

## Core Concepts

Project ZA is being built around a few key principles to differentiate it from traditional text-based games:

- **Multi-AI Storytelling System:** The game is orchestrated by multiple AI entities. A central **Narrator AI** acts as the Dungeon Master, describing the world and reacting to your actions. You will also interact with the **System AI**, the in-game entity that grants your LitRPG abilities, and various **NPC AIs** with their own personalities and goals.
- **Vitals-Based LitRPG System:** Forget Strength, Dexterity, and Intelligence. This game eschews traditional RPG stats. Instead, your survival is governed by a **Vitals** system (Hunger, Thirst, Blood Loss, etc.). Progression comes from a skill tree, where you spend a system-generated currency to unlock new abilities and knowledge that directly impact your narrative choices and survival odds.
- **Unbounded Player Agency:** The world is generated on the fly. You are not limited by a list of pre-programmed choices. Describe what you want to do in natural language, and the Narrator AI will determine the outcome based on the laws of physics and the current state of the world. If you can think it and it's plausible, you can attempt it.
- **Simple, Local-First Gameplay:** Project ZA is designed to be incredibly easy for anyone to play. This "local-first" approach means you don't need to connect to a remote server or configure a database. It runs entirely in your web browser, making it compatible with any operating system. By running a single command, you start the game and can begin playing immediately.

## Technology Stack

This project is built with a modern, type-safe, and performant technology stack:

- **Framework:** Vite + React (TypeScript)
- **UI:** TailwindCSS with shadcn/ui
- **Routing:** TanStack Router
- **AI Integration:** Vercel AI SDK using Google Gemini models
- **Database:** SurrealDB (persisted in-browser via IndexedDB)
- **Game Runtime:** The Web Browser (fully client-side)
- **Development Toolkit:** Bun (for package management, bundling, and running the local dev server)
- **Tooling:** ESLint, Prettier, and Lefthook for git hooks.

## Getting Started (Local Development)

Follow these steps to get a local development environment up and running.

1.  **Prerequisites:**

    - Ensure you have [Bun](https://bun.sh/) installed on your system.
    - You will need an API key for the Google Gemini models.

2.  **Clone the repository:**

    ```bash
    git clone https://github.com/RyanLurn/project-za.git
    cd project-za
    ```

3.  **Install dependencies:**

    ```bash
    bun install
    ```

4.  **Set up environment variables:**

    - Create a new file named `.env.local` in the root of the project.
    - Copy the contents of `.env.example` into your new `.env.local` file.
    - Populate the required environment variables, such as your Gemini API key.

5.  **Run the development server:**
    ```bash
    bun dev
    ```
    The application should now be running on `http://localhost:5173` (or the next available port).

## Contributing

I welcome collaboration, but to keep the project focused in these early stages, please follow this process:

1.  **Open an Issue First:** Before writing any code or creating a pull request, please **open an issue**. This applies to bug reports, feature suggestions, or any other ideas.
2.  **Discuss:** We will discuss the issue to determine if it aligns with the project's vision and current priorities.
3.  **Wait for Approval:** Please do not start working on a Pull Request until I explicitly approve the work in the issue comments. This prevents wasted effort and ensures we're all on the same page.

This process helps maintain a clear direction for the project.

## Roadmap

The roadmap is currently being formed. The immediate goals are to establish the core game loop, the AI interaction layer, and the basic Vitals and Skill systems. For more details or to suggest features, please check the [Issues](https://github.com/RyanLurn/project-za/issues) tab.

## Contact

You can find me on X (formerly Twitter): [@theryanlurn](https://x.com/theryanlurn)

## License

This project is open-source and licensed under the [MIT License](LICENSE).
