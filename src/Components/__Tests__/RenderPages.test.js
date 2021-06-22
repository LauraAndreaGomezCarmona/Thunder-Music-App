import {render, screen, cleanup} from '@testing-library/react';
import {Home} from '../Pages/Home';
import {Music} from '../Pages/Music';
import {SongsQuiz} from '../Pages/SongsQuiz';
import {Songs} from '../Pages/Songs';

afterEach(() => {
    cleanup();
});

test('should render the Home page', () => {
    render(<Home/>);
    const HomeElement = screen.getByTestId('home-id');
    expect(HomeElement).toBeInTheDocument();
})

test('should render the Songs page', () => {
    render(<Songs/>);
    const SongsElement = screen.getByTestId('songs-id');
    expect(SongsElement).toBeInTheDocument();
})

test('should render the Music page', () => {
    render(<Music/>);
    const MusicElement = screen.getByTestId('music-id');
    expect(MusicElement).toBeInTheDocument();
})

test('should render the songs quiz page', () => {
    render(<SongsQuiz/>);
    const SongsQuizElement = screen.getByTestId('songs-quiz-id');
    expect(SongsQuizElement).toBeInTheDocument();
})


