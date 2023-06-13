## Overview and Purpose

The "SCLabs Prod" pipeline is designed to automate the build, tagging, and deployment process for release manually generated in GitHub. Its primary purpose is to ensure a streamlined and reliable deployment of the code changes to the production environment.

## Pipeline Architecture

The pipeline architecture includes the following key components:

1. Source Control Repository: The codebase is stored in a GitHub repository. The main branch serves as the primary branch for the codebase.

2. Build and Tagging Stage: The pipeline is triggered on every manual release. It fetches the latest code changes and performs the build process, generating a container image. The pipeline then tags the image with a unique build ID, ensuring traceability and versioning.

3. Container Registry: The tagged image is pushed to an Azure Container Registry. The container registry serves as a centralized repository for storing container images.

4. Azure AppService: The Azure AppService is configured with continuous deployment capabilities. It continuously monitors the container registry for new image availability. Upon detecting a new image with the "production-release" tag, it automatically deploys the image to the production environment. This environment serves as the public facing environment for official releases.

## Pipeline Configuration

[Pipeline file](../prod-azure-pipelines.yml)

[Link to ADO](https://dev.azure.com/VP-BD/ENDC-DECD-Builds/_build?definitionId=90&_a=summary)


## Pipeline Workflow

1. Initialization and Pre-checks:
    The pipeline is triggered on every manual release in GitHub.
    It fetches the code changes related to this release from the GitHub repository.

2. Build and Tagging Stage:
    The pipeline performs the build process with the fetched code changes.
    It generates a container image and tags it with a unique build ID as well as "production-release", signifying that this image can be deployed to public facing and production environments.

3. Push to Container Registry:
    The tagged image is pushed to the ACR.
    The ACR stores the container image for future deployments.

4. Continuous Deployment to Azure AppService:
    The Azure AppService, configured with continuous deployment capabilities, continuously monitors the container registry for new image availability.
    Upon detecting a new image tagged "production-release", it automatically initiates the deployment process to the development environment.
    The deployment process ensures that the latest code changes are made accessible for testing and review.

## Environment and Dependencies
The variables section is defined as an object in the pipeline YAML. The required variables are:

| Parameter          | Description                                                                                                                  |
|--------------------|------------------------------------------------------------------------------------------------------------------------------|
| imageRepository    | The name of the repository for the related project's images in the ACR.                                                      |
| ADO_BUILD          | (Deprecated) This parameter will be removed in a coming version.                                                            |
| BUILD_DATE         | (Deprecated) This parameter will be removed in a coming version.                                                            |
| tag                | The tag we will use to uniquely identify this run's image. The tag follows the format 'ADO-$(ADO_BUILD)'.                    |
| vmImageName        | The tier of agent Azure DevOps should use to run this pipeline.                                                             |
| GIT_SHA            | (Deprecated) This parameter will be removed in a coming version.                                                            |

  Documentation on system / predefined variables such as System.Debug can be found [here](https://learn.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml)


## Pipeline Triggers
this pipeline will trigger each time a tagged release is generated in GitHub, following the naming convention "V*"

## Troubleshooting and Error Handling
to be populated as issues arrise