import { Film } from "./useFilms";

export function FilmCard({ film }: { film: Film }) {
	return (
		<div style={{ display: "flex" }}>
			<img src={film.cover} />
			<span>{film.name}</span>
		</div>
	);
}
