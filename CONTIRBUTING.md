# 🤝 Contributing to Frappe Custom UI App

Thank you for considering contributing to the **Frappe Custom UI App** — an open-source project aimed at enhancing the UI/UX of Frappe applications through custom components, role-based controls, and extensibility.

This guide will help you understand the process of contributing, from setting up your development environment to submitting a successful pull request.

---

## 📌 Table of Contents

- [Getting Started](#getgitting-started)
- [GitHub Contribution Guide: Fork, Branch, Commit, and Pull Request (PR)](#GitHub-Contribution-Guide)
- [Development Workflow](#development-workflow)
- [Coding Guidelines](#coding-guidelines)
- [Good First Issues](#good-first-issues)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Community and Support](#community-and-support)
- [License](#license)

---

## ✅ Getting Started

To contribute code, documentation, or report bugs, follow these basic steps:

## 🛠️ GitHub Contribution Guide

### Fork, Branch, Commit, and Pull Request (PR)

A step-by-step guide to contributing to an open-source project using GitHub.

---

## 🔱 1. Fork the Repository

> Forking creates a personal copy of someone else's repository under your GitHub account.

**Steps:**

1. Navigate to the repository you want to contribute to on GitHub.
2. Click the **Fork** button in the top-right corner.
3. GitHub will create a copy of the repository under your own account.

---

## 🌿 2. Clone and Create a Branch

> Cloning downloads the repository to your local machine. Branching keeps your work separate from the main code.

**Steps:**

<pre>
# Clone your forked repository
git clone https://github.com/your-username/repository-name.git

# Navigate into the cloned repo
cd repository-name

# Create a new branch for your feature or fix
git checkout -b my-feature-branch
</pre>

✅ Replace `your-username` and `repository-name` with your actual GitHub username and the repo name.

```bash
git clone https://github.com/janakvaghela542/Frappe-Custom-UI-App.git
cd Frappe-Custom-UI-App
```

---

## 💾 3. Make Changes and Commit

> Once you’ve made your changes, you need to commit them with a clear message.

**Steps:**

# Check what has changed

```bash
git status
```

# Stage your changes

```bash
git add .
```

# Commit with a meaningful message

```bash
git commit -m "Add feature X or fix bug Y"
```

💡 Make small, focused commits that describe **why** a change was made.

---

## 🚀 4. Push and Create a Pull Request (PR)

> Push your branch to your GitHub fork and open a PR to the original repository.

**Steps:**

<pre>
# Push your branch to your fork
git push origin my-feature-branch
</pre>

Then:

1. Go to your fork on GitHub.
2. Click **Compare & pull request**.
3. Add a title and description explaining your changes.
4. Click **Create pull request**.

## 5. Add the Original Repository as Upstream

This allows you to pull in the latest changes from the original repo:

```bash
git remote add upstream https://github.com/janakvaghela542/Frappe-Custom-UI-App.git
```

## 6. Set Up Your Development Environment

Make sure you have a working Frappe bench environment. Then install the app:

```bash
# Inside your bench directory
bench get-app frappe_custom_ui_app https://github.com/<your-username>/Frappe-Custom-UI-App.git
bench install-app frappe_custom_ui_app
```

Now you're ready to develop and test your changes.

---

## 🔄 (Optional) Keep Your Fork Updated

> It's a good idea to sync your fork with the original repository.

**Steps:**

<pre>
# Add the original repo as a remote source
git remote add upstream hhttps://github.com/janakvaghela542/Frappe-Custom-UI-App.git

# Fetch latest changes from the original repo
git fetch upstream

# Merge them into your local main branch
git checkout main
git merge upstream/main

# Push updated main to your fork
git push origin main
</pre>

---

---

## 📌 Summary Table

| Step      | Command / Action                                                        |
| --------- | ----------------------------------------------------------------------- |
| Fork      | GitHub UI → Click **Fork**                                              |
| Clone     | `git clone https://github.com/janakvaghela542/Frappe-Custom-UI-App.git` |
| Branch    | `git checkout -b feature-branch`                                        |
| Commit    | `git add .` + `git commit -m "message"`                                 |
| Push      | `git push origin feature-branch`                                        |
| Create PR | GitHub UI → Compare & pull request → Submit PR                          |

---

## 🙌 Final Notes

- Always write **clear commit messages**.
- Use **branches** for different features or fixes.
- Be respectful and follow the repository's **contribution guidelines**.
- Keep your PRs **focused and minimal**.

Click the **Fork** button on the top-right of [this GitHub repo](https://github.com/janakvaghela542/Frappe-Custom-UI-App) to create your own copy.

## 🔄 Development Workflow

1. Create a New Branch

Never work directly on the main branch. Create a descriptive branch name:

```bash
git checkout -b fix-listview-button-visibility
```

2. Make Your Changes

- Follow our Coding Guidelines.
- Test locally before committing.
- Write clear and atomic commits.

3. Commit Your Changes

- Use meaningful commit messages:

```bash
git add .
git commit -m "fix: corrected visibility issue in ListView custom button"
```

4. Sync with Upstream (if needed)

```bash
git fetch upstream
git rebase upstream/main
```

5. Push to Your Fork

```bash
git push origin fix-listview-button-visibility
```

## ✨ Coding Guidelines

Please keep these in mind while writing code:

### General

- Keep your changes focused and modular.

- Avoid mixing unrelated changes in a single PR.

- Follow the Frappe framework’s conventions and naming patterns.

### Python

- Use snake_case for functions and variables.

- Use docstrings and comments for clarity.

- Format with tools like black or flake8 if available.

### JavaScript

- Use camelCase for variables and functions.

- Keep client-side logic modular.

- Avoid polluting the global scope.

- Use Frappe's built-in utilities where possible.

### HTML/CSS

- Prefer Frappe's inbuilt classes for styling.

- Follow semantic HTML.

- Use scoped or modular styles.

### 🧪 Testing Your Changes

- Before submitting your pull request, ensure:

- Your changes work as expected in the Frappe UI.

- You’ve tested the feature with different user roles if applicable.

- No console errors or warnings.

- Any new behavior is documented (comments, inline docs, or external docs).

### 🏁 Pull Request Process

- Once you're ready, follow this to submit a PR:

- Go to your fork and switch to your branch.

- Click "New Pull Request".

- Ensure the base branch is main of the original repo.

- Provide a clear and concise PR description:

- What is the purpose of this change?

- Any related issue links?

- Steps to test the feature/fix.

- Screenshots or video demos if it affects UI.

- Once submitted, a maintainer will review your PR and provide feedback or merge it.

## 🏷 Good First Issues

If you're looking for a place to start:

- Check the Issues tab.

Look for labels like:

- good first issue

- help wanted

- documentation

These are ideal for newcomers and usually well-scoped.

## 🐞 Reporting Issues

Found a bug or have a feature request?

- Please open a new issue and include:

- Clear title and description.

- Steps to reproduce (if a bug).

- Screenshots, error logs, or GIFs when possible.

- Environment info (Frappe version, browser, etc.)

## 🤝 Community and Support

- For Frappe-related questions, visit Discuss.Frappe.io.

- You can also mention your queries in the issues section if it relates to this app.

Contributions, bug reports, feature ideas — all are welcome!

## ⚖️ License

- This project is licensed under the MIT License. See the LICENSE file for details.
