import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import liked from '../../../assets/Icons/heart-red.svg';
import disliked from '../../../assets/Icons/heart-black.svg';
import CardFooter from '../cardFooter';
import makeRequest from '../../../utils/makeRequest';
import clapImg from '../../../assets/Icons/clapping-grey.svg';

jest.mock('../../../utils/makeRequest');

describe('CardFooter', () => {
  const mockProps = {
    id: 1,
    like: false,
    clap: 45,
    handleLike: jest.fn(),
    handleClap: jest.fn(),
  };
  it('should render correctly', () => {
    const { asFragment } = render(<CardFooter {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render with clap image', () => {
    const { getByAltText } = render(<CardFooter {...mockProps} />);
    const imgElement = getByAltText('clapping');
    expect(imgElement.getAttribute('src')).toBe(clapImg);
  });
  it('should render with clap count', () => {
    const { getByText } = render(<CardFooter {...mockProps} />);
    const clapCountElement = getByText(mockProps.clap);
    expect(clapCountElement).toBeTruthy();
  });
  it('handleClap should be called on click', async () => {
    const { getByAltText } = render(<CardFooter {...mockProps} />);
    const imgElement = getByAltText('clapping');
    fireEvent.click(imgElement);
    await waitFor(() => {
      expect(mockProps.handleClap).toHaveBeenCalled();
    });
  });
  it('should render with heart image', async () => {
    const { getByAltText } = render(<CardFooter {...mockProps} />);
    const imgElement = getByAltText('like');
    expect(imgElement.getAttribute('src')).toBe(disliked);
  });
  it('handleLike should be called on click', async () => {
    const { getByAltText } = render(<CardFooter {...mockProps} />);
    const imgElement = getByAltText('like');
    fireEvent.click(imgElement);
    waitFor(() => {
      expect(mockProps.handleLike).toHaveBeenCalled();
    });
  });
});
