import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../src/app/page'

describe('Test photo carousel', () => {
    test('shows the correct photo when clicking on photo', () => {
        const {container} = render(<Home />);
        const photosCarouselElement = container.querySelector('#info-photo');
        const photosLabel = screen.getByText('Photos');
        fireEvent.mouseEnter(photosLabel);
        expect(photosCarouselElement).toHaveClass('info show');

        const somePhoto = screen.getByAltText('Thumbnail 1');
        fireEvent.click(somePhoto);
        expect(screen.getByAltText('Photo 1')).toBeInTheDocument();


    });

    test('Shows the correct photo when clicking on an arrow', () => {
        const {container} = render(<Home />);
        const photosCarouselElement = container.querySelector('#info-photo');
        const photosLabel = screen.getByText('Photos');
        fireEvent.mouseEnter(photosLabel);
        expect(photosCarouselElement).toHaveClass('info show');

        const nextArrow = container.querySelector('#next_btn');
        const prevArrow = container.querySelector('#prev_btn');

        expect(prevArrow).toBeInTheDocument();
        expect(nextArrow).toBeInTheDocument();

        const somePhoto = screen.getByAltText('Thumbnail 0');
        fireEvent.click(somePhoto);

        for(let i = 1; i<= 3; i++){
            fireEvent.click(nextArrow as Element);
            expect(screen.getByAltText('Photo ' + i)).toBeInTheDocument();
        }

        for(let i = 2; i>= 0; i--){
            fireEvent.click(prevArrow as Element);
            expect(screen.getByAltText('Photo ' + i)).toBeInTheDocument();
        }
    });
});