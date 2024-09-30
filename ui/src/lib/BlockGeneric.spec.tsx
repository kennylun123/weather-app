import { render } from '@testing-library/react';

import BlockGeneric from './BlockGeneric';

describe('BlockGeneric', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockGeneric />);
    expect(baseElement).toBeTruthy();
  });
});
