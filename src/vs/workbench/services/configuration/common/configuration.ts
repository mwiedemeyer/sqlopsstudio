/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IConfigurationService } from 'vs/platform/configuration/common/configuration';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';

export const CONFIG_DEFAULT_NAME = 'settings';

// {{SQL CARBON EDIT}}
export const WORKSPACE_CONFIG_FOLDER_DEFAULT_NAME = '.sqlops';
export const WORKSPACE_CONFIG_DEFAULT_PATH = `${WORKSPACE_CONFIG_FOLDER_DEFAULT_NAME}/${CONFIG_DEFAULT_NAME}.json`;

export const IWorkspaceConfigurationService = createDecorator<IWorkspaceConfigurationService>('configurationService');

export interface IWorkspaceConfigurationService extends IConfigurationService {

	/**
	 * Returns untrusted configuration keys for the current workspace.
	 */
	getUnsupportedWorkspaceKeys(): string[];

}

export const WORKSPACE_STANDALONE_CONFIGURATIONS = {
	'tasks': `${WORKSPACE_CONFIG_FOLDER_DEFAULT_NAME}/tasks.json`,
	'launch': `${WORKSPACE_CONFIG_FOLDER_DEFAULT_NAME}/launch.json`
};