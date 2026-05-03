# Contributing to First App

Thank you for your interest in contributing to the First App weather application! We appreciate your help in making this project better.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/first-app.git
   cd first-app
   ```
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file with your OpenWeatherMap API key:
   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Making Changes

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Run ESLint before submitting:
  ```bash
  npm run lint
  ```

### Commit Messages

- Use clear and descriptive commit messages
- Start with an action verb (Add, Fix, Update, Remove, etc.)
- Keep messages concise but informative

Examples:
- `Add weather alert feature`
- `Fix timezone display bug`
- `Update Tailwind CSS configuration`

## Submitting Changes

1. Ensure all code is properly formatted and passes linting
2. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a Pull Request with:
   - A clear title describing the changes
   - A description of what was changed and why
   - References to any related issues

## Pull Request Guidelines

- Keep PRs focused on a single feature or bug fix
- Include screenshots or videos for UI changes
- Ensure the development server runs without errors
- Add appropriate labels to your PR

## Reporting Issues

When reporting bugs, please include:
- A clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Your environment (OS, Node version, browser)

## Questions?

Feel free to open a discussion or issue if you have any questions about contributing.

Thank you for your contributions! 🎉
