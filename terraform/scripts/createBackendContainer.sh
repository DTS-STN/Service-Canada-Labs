#!/bin/bash
az storage container create --account-name $TF_VAR_REMOTE_STATE_STORAGE_ACCOUNT --name $TF_VAR_APP_NAME