import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../src/app/page'

describe('Test dynamic content changes', () => {
  test('shows the correct element on mouse enter', () => {
    const {container} = render(<Home />);

    const aboutElement = container.querySelector('#info-about')
    const photosCarouselElement = container.querySelector('#info-photo')
    const portfolioElement = container.querySelector('#info-portfolio')
    const contactsElement = container.querySelector('#info-contact')

    expect(aboutElement).toHaveClass('info hide');
    expect(photosCarouselElement).toHaveClass('info hide');
    expect(portfolioElement).toHaveClass('info hide');
    expect(contactsElement).toHaveClass('info hide');


    const aboutLabel = screen.getByText('About me')
    const photosLabel = screen.getByText('Photos')
    const portfolioLabel = screen.getByText('Portfolio')
    const contactsLabel = screen.getByText('Contact Me')
    fireEvent.mouseEnter(aboutLabel);

    expect(aboutElement).toHaveClass('info show');
    expect(photosCarouselElement).toHaveClass('info hide');
    expect(portfolioElement).toHaveClass('info hide');
    expect(contactsElement).toHaveClass('info hide');

    fireEvent.mouseEnter(photosLabel);

    expect(aboutElement).toHaveClass('info hide');
    expect(photosCarouselElement).toHaveClass('info show');
    expect(portfolioElement).toHaveClass('info hide');
    expect(contactsElement).toHaveClass('info hide');

    fireEvent.mouseEnter(portfolioLabel);

    expect(aboutElement).toHaveClass('info hide');
    expect(photosCarouselElement).toHaveClass('info hide');
    expect(portfolioElement).toHaveClass('info show');
    expect(contactsElement).toHaveClass('info hide');

    fireEvent.mouseEnter(contactsLabel);

    expect(aboutElement).toHaveClass('info hide');
    expect(photosCarouselElement).toHaveClass('info hide');
    expect(portfolioElement).toHaveClass('info hide');
    expect(contactsElement).toHaveClass('info show');
  });
});
