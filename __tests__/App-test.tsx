/**
 * @format
 */

import 'react-native';
import {formatDate} from '../src/helpers/date';

describe('date', () => {
  test('should date correct date', () => {
    expect(formatDate('2022-12-06')).toBe('6. 12. 2022');
  });
});
