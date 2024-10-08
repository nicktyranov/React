import FilmList from '../../Components/FilmList/FilmList';
import Heading from '../../Components/Heading/Heading';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Film } from '../../Components/FilmList/FilmList.props';

export function Favorites() {
	const favoritesData = useSelector((state: RootState) => state.favorites.items);

	// Адаптируем данные под ожидаемый интерфейс
	const films: Film[] = favoritesData.map((film) => ({
		// Преобразуем данные из формата FavoriteItem в формат Film
		'#TITLE': film.title || '',
		'#IMDB_ID': film.id,
		'#RANK': film.rating,
		'#IMG_POSTER': film.img || ''
	}));

	return <>
		<div>
			<Heading headingText='Favorites' level={1} appearance='big' />
			<FilmList films={films}/>
		</div>
	</>;
}
