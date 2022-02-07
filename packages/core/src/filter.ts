/**
 * For the usage of rollup filter, please refer to https://github.com/rollup/plugins/tree/master/packages/pluginutils
 */
import { createFilter } from '@rollup/pluginutils'

export const htmlFilter = createFilter(['**/*.html'])
