import { render } from '@testing-library/react';
import DateTime from '../dateTime';

describe('DateTime', () => {
  it('should render correctly', () => {
    const mockData = {
      date: '8.9.23',
      readingTime: '2 mins',
    };
    const { asFragment } = render(<DateTime {...mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
