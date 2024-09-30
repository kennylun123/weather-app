import { render } from '@testing-library/react';

import CircleButton from './CircleButton';

describe('CircleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CircleButton />);
    expect(baseElement).toBeTruthy();
  });
});
