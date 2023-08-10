interface Author {
	id: number;
	name: string;
	domain: string;
	avatar: string;
}

interface Content {
	text: string;
	attachments: string[];
}

interface Review {
	id: number;
	date: number;
	author: Author;
	content: Content;
}

export interface Film {
	id: number;
	name: string;
	cover: string;
	score: number;
	reviews?: Review[];
}

export function useFilms(): Film[] {
	return [
		{
			id: 1,
			name: "Человек паук: Через вселенные",
			cover:
				"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/30f8c00e-c124-48fe-be86-2ad4c0b3e5b8/orig",
			score: 8,
		},
	];
}
