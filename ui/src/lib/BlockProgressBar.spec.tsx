import { render } from '@testing-library/react';

import BlockProgressBar from './BlockProgressBar';

describe('BlockProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockProgressBar />);
    expect(baseElement).toBeTruthy();
  });
});
