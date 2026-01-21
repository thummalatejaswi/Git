# Git Visualization Project

A JavaScript-based Git repository simulator with interactive visualization capabilities.

## Overview

This project simulates Git repository operations and provides a visual representation of branches, commits, and repository history. It includes both a command-line interface and a web-based visualization tool.

## Features

- **Repository Simulation**: Create and manage Git repositories with branches and commits
- **Branch Management**: Create, checkout, and switch between branches
- **Commit History**: Track commit messages, timestamps, and parent relationships
- **Interactive Visualization**: Web-based UI to visualize repository structure and history
- **Cross-Platform**: Works in both browser and Node.js environments

## Files

- `repo.js` - Core Git repository simulation logic
- `main.js` - Command-line interface for Git operations
- `draw.js` - Canvas drawing utilities for visualization
- `visualize.js` - Visualization logic and rendering
- `repo.html` - HTML interface for the web visualization
- `repo.scss` - Styling for the web interface

## Usage

### Web Interface

Open `repo.html` in a web browser to use the interactive visualization tool.

### Command Line

Run Git operations using the command-line interface:

```javascript
// Example usage in Node.js
const Git = require('./repo.js').Git;

const repo = new Git('my-repo');
repo.commit('Initial commit');
repo.createBranch('feature');
repo.checkout('feature');
repo.commit('Add new feature');
console.log(repo.log());
```

## API Reference

### Git Class

- `constructor(name)` - Create a new repository
- `commit(message)` - Create a new commit
- `log()` - Get commit history
- `createBranch(name)` - Create a new branch
- `checkout(name)` - Switch to a branch

## Installation

No installation required. Simply clone the repository and open the files in your preferred environment.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.