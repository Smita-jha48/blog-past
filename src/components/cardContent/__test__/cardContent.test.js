import { render } from '@testing-library/react';
import CardContent from '../cardContent';

describe('CardContent', () => {
  it('should render correctly', () => {
    const mockProps = {
        title: "xyz",
        description: "tjxnzh",
    }
    const { asFragment } = render(<CardContent {...mockProps}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});