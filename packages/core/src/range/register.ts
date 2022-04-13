/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsRange } from './range.element.js';
import '@cds/core/forms/register.js';

registerElementSafely('cds-range', CdsRange);

declare global {
  interface HTMLElementTagNameMap {
    'cds-range': CdsRange;
  }
}
