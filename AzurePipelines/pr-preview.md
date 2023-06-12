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

7. Cleanup stage: Once the pull request is closed, we delete the slot to save space and resources on our appservice plan.

## Pipeline Configuration

[Pipeline file](./pr-preview.yml)

[Link to ADO](https://dev.azure.com/VP-BD/ENDC-DECD-Builds/_build?definitionId=1472)

## Pipeline Workflow

1. Initialization and Pre-checks:

    The pipeline begins by checking the Azure Container Registry (ACR) for an existing image corresponding to this codebase. If an image exists, the pipeline pulls the latest, leveraging its Docker layers to avoid reinstalling dependencies.
    Once the image is pulled or if it doesn't exist, the pipeline leaves a comment on the related GitHub pull request, notifying the developers that a testing environment is being generated.

2. Build and Docker Image Generation:

    The pipeline proceeds to build the code changes from the pull request. It fetches the latest code from the GitHub repository and generates a new Docker image containing the application and its dependencies.

3. Azure AppService Slot Creation:

    After successful image generation, the pipeline creates a slot in Azure AppService, which serves as an isolated testing environment for the changes made in the pull request.
    The slot is provisioned with the newly built Docker image, enabling testers to access the application through an assigned endpoint.

4. Testing and Evaluation:

    The pipeline leaves another comment on the related GitHub pull request with a link to the new environment. Testers and reviewers can access the application hosted in the Azure AppService slot. They can perform manual tests or automated browser tests, evaluate the functionality, and provide feedback within the GitHub pull request.
    During this stage, testers can interact with the application, validate the changes, and ensure the expected behavior is achieved.

5. Pull Request Closure:

    Once the pull request is closed, indicating that the changes are ready for merging, the pipeline proceeds to cleanup and finalization steps.
    The pipeline deletes the Azure AppService slot that was created for testing purposes, ensuring that the testing environment is cleaned up after the completion of the pull request.

## Environment and Dependencies
The variables section is defined as an object in the pipeline YAML. The required variables are:

| variable                              | Description                                                                                                                                                                                                                                                      |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| azure.servicePrincipal                 | Refers to the name of the service principle you have made at the organization level in Azure DevOps.                                                                                                                                                           |
| webapp.name                            | The name of the appservice plan you are deploying previews to.                                                                                                                                                                                                   |
| webapp.resourceGroup                   | The resource group of the appservice plan you are deploying previews to.                                                                                                                                                                                         |
| webapp.slotName                        | A dynamically generated name for the slot created in the appservice plan when this pipeline detects a pull request. The format is as follows: 'pr-preview-(System.PullRequest.PullRequestId)' using a predefined variable to avoid collision.                                                                                 |
| azureContainerRegistry.name            | The name of the container registry where the pipeline can pull the latest image for cashing and push the new builds to before deployment.                                                                                                                       |
| azureContainerRegistry.repository      | The name of the repository in the container registry that corresponds to this project's codebase.                                                                                                                                                               |
| azureContainerRegistry.domain          | The domain where the pipeline can find the container registry. In most cases, this will be a '.azurecr.io' domain.                                                                                                                                              |
| azureContainerRegistry.tag             | A dynamically generated tag we can use to identify this temporary build in the container registry. We use the format 'preview-$(Build.SourceVersion)' leveraging another predefined variable to avoid collision.                                                       |

Documentation on system / predefined variables such as System.Debug can be found [here](https://learn.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml)


## Pipeline Triggers
This pipeline will trigger each time a pull request is opened or closed on the main branch.

## Troubleshooting and Error Handling
to be populated as issues arrise