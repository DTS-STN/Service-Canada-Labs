## Overview and Purpose
The CI/CD pipeline for pull requests is designed to automate the build and deployment process for each pull request in the development workflow. It aims to provide an efficient and reliable way to test changes before merging them into the main codebase.

The primary purpose of this pipeline is to build the code changes made in a pull request and deploy them to an arbitrary endpoint, creating a live environment where testers and reviewers can examine the outcome of the changes. By hosting the changes on an accessible endpoint, the pipeline allows testers to interact with the modified application, evaluate its behavior, and provide valuable feedback.

This pipeline enables a smooth and iterative testing process by offering an early opportunity to detect any potential issues or bugs introduced by the pull request. By automating the build and deployment steps, it eliminates manual intervention, reducing the time and effort required for testing.

## Pipeline Architecture
The architecture of the pipeline consists of the following key components:
1. GitHub Repository: The source code for the project resides in a GitHub repository. Developers create and manage their feature branches or topic branches within this repository. The repository acts as the central location for version control and collaboration.

2. Azure DevOps Pipeline: The CI/CD pipeline is created and configured in Azure DevOps. Azure DevOps provides a powerful set of tools and services to automate the build, test, and deployment processes. The pipeline is defined using a YAML-based configuration file stored within the repository.

3. Pull Request Trigger: The CI/CD pipeline is triggered automatically whenever a new pull request is created or an existing one is updated in the GitHub repository. This trigger initiates the execution of the pipeline and starts the build and deployment process.

4. Get cache stage: We log into the Azure Container Registry (ACR) and try to pull the latest build of this projects codebase. If its found, ts stored on the agent temporarily.

5. Build stage: The next stage is the build stage, where the code changes from the pull request branch are fetched and built. This stage involves compiling the code, resolving dependencies, and generating the container image.

6. Hosting stage: A slot is generated in the development appservice and the container image is deployed for testing.

6. Cleanup stage: Once the pull request is closed, we delete the slot to save space and resources on our appservice plan.

## Pipeline Configuration
[Pipeline file](./pr-preview.yml)
[Link to ADO](https://dev.azure.com/VP-BD/ENDC-DECD-Builds/_build?definitionId=1472)

## Pipeline Workflow

## Environment and Dependencies

## Pipeline Triggers

## Testing and Quality Assurance

## Deployment and Release

## Troubleshooting and Error Handling

## Dependencies and External Services

## Best Practices and Guidelines

## References and Resources
