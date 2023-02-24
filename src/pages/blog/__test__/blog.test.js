import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import { useNavigate } from 'react-router-dom';
import Blog from '../blog';
import makeRequest from '../../../utils/makeRequest/index';

jest.mock('../../../utils/makeRequest/index');

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('blogs', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockData = [
    {
      id: 3,
      date: '2023-02-20T21:00:00.001Z',
      reading_time: '2 mins',
      title: '10 young painters you need to know',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
      claps: 26,
      liked: false,
      image: 'https://i.ibb.co/V38cHQ3/young-painters.png',
    },
    {
      id: 1,
      date: '2023-02-01T14:46:22.001Z',
      reading_time: '2 mins',
      title: 'The future of abstract art and the culture is a bright one',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
      claps: 4,
      liked: false,
      image: 'https://i.ibb.co/LNxt44v/abstract.png',
    },
  ];

  it('should show loading when api call is made to backend', async () => {
    makeRequest.mockResolvedValue(mockData);
    render(<Blog />);
    expect(screen.getByTestId('loader')).toBeTruthy();
    await waitFor(() => {
      //   console.log(screen.queryAllByTestId('posts'));
      expect(screen.queryAllByTestId('post')).toHaveLength(2);
    });
  });
  it('should show data when call is made to backend and data is fetched', async () => {
    makeRequest.mockResolvedValue(mockData);
    render(<Blog />);
    await waitFor(() => {
      expect(screen.queryAllByTestId('post')).toHaveLength(2);
    });
  });
});
