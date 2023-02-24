import { render } from '@testing-library/react';
import CardImage from '../cardImage';

describe('CardImage', () => {
  it('should render correctly', () => {
    const img = { image: 'filepath' };
    const { asFragment } = render(<CardImage {...img} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
