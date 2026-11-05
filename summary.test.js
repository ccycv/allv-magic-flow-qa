import {test} from 'node:test';
import assert from 'node:assert/strict';
import {summarize} from './summary.js';
test('counts invented build outcomes',()=>assert.deepEqual(summarize([{status:'passed'},{status:'failed'}]),{total:2,failed:1}));
