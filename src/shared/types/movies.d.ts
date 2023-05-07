declare namespace DMovies {
	export interface IMovie {
		title: string;
    image_url: string;
    rating: string;
    year: string;
    crew: string;
	}

	export interface IPagination {
		limit: number;
    page: number;
    maxPage: number;
    total: number;
	}

	export interface IMovies {
		data: IMovie[];
		pagination: IPagination;
	}
}
