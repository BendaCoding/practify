import { last } from 'lodash';

export const getComponentName = (fullPath: string) => last(fullPath.split('/')) || ''
