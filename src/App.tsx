import { FilmCard } from "./sections/films/FilmCard";
import { useFilms } from "./sections/films/useFilms";

export function App() {
	const films = useFilms();

	return (
		<div className="App">
			{films.map((film) => (
				<FilmCard key={film.id} film={film} />
			))}
		</div>
	);
}
