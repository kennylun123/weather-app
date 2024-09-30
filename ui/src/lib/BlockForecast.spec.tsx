import { render } from '@testing-library/react';

import BlockForecast from './BlockForecast';

describe('BlockForecast', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockForecast />);
    expect(baseElement).toBeTruthy();
  });
});
