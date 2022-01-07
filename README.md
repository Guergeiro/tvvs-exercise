# TVVS Exercise

## Table of Contents

- [Requirements](#requirements)
- [Project setup](#project-setup)
- [Exercises](#exercises)

## Requirements

For this project to work, you'll need

- [NodeJS](https://nodejs.org/).

  - Ideally, you would use version **14+**.
  - You can download Node on their [download](https://nodejs.org/en/download/)
    page.
  - As for _recommendation_, using a
    [package manager](https://nodejs.org/en/download/package-manager/) for
    (U)nix systems can be more convenient.

- An account in one of the following git hosting providers.

  - [GitHub](https://github.com/)
  - [BitBucket](https://bitbucket.com/)
  - [GitLab](https://gitlab.com/)

  _**NOTE:**_ Some features may be different depending on the providers.
  **GitHub** will be the main focus of this exercise.

## Project setup

1. Create a new project designated _tvvs-exercise_.

2. After that, go to your repository "Actions" tab and enable workflows (if you
   haven't already).

3. Go to https://sonarcloud.io/ & Log in.

4. Click on import an organization from GitHub and select your account.

5. Either select all repositories or just the _tvvs-exercise_ and hit
   **install**.

6. Accept default import values, but make sure the _"free plan"_ is selected.

7. Select the imported repository and hit _"set up"_.

8. Choose GitHub Actions as you CI and follow instructions, making sure you
   select the JS/TS build.

   - Don't configure a workflow, because the base project already comes with it.
     But you should configure the repository secrets!

   - Also, make sure you save the **project key** and **organization** since
     it'll be required in step 11.

9. Go to **Administration > New Code** and set the project based on _"Previous
   Version"_.

10. Go to the initial project and configure the git as explained in your newly
    GitHub repository in step 1 (init/branch/remote configuration).

11. Make the following changes to your `sonar-project.properties` file.

    ```
    sonar.projectKey={YOUR PROJECT KEY}
    # You can find this under Administration > Update Key
    sonar.organization={YOUR ORGANIZATION NAME}
    ```

12. Commit and push your changes.

13. Check if the sonarcloud action passes and then check the project in
    sonarcloud.

14. Remove the `src/` folder from the `.gitignore` and uncomment the lines
    metioned in `sonar-project.properties`.

    ```
    sonar.eslint.reportPaths=coverage/lint.json
    ```

15. Commit and push your new changes.

16. Check if the sonarcloud action passes and then check the project in
    sonarcloud (it should be **RED**)!

## Exercises

Some exercises require you to install all npm's dependencies. To do that, simply
do `npm install` in the root directory. [NPM](https://www.npmjs.com/) already
comes bundled with NodeJS.

1. Start by analyzing each category of sonarcloud and fixing the corresponding
   issue. Push your code with each fix to make sure it's the correct fix.

2. Run [ESLint](https://eslint.org/) and fix more issues (if any).

```
npm run lint
```

3. Run [Prettier](https://prettier.io/) and format your code according to
   codestyle.

```
npm run format
```

4. Run [audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) to try to fix
   vulnerabilities in dependencies.

```
npm audit
```

```
npm audit fix
```

```
npm outdated
```

```
npm update
```

```
npm audit
```
