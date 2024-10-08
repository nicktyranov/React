
import Heading from '../../Components/Heading/Heading';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Paragrah from '../../Components/Paragrah/Paragrah';


const text = (
	<>Enter the name of a movie, TV series or cartoon to search <br /> and add to favorites.</>
);

const handleSearch = (query: string) => {
	console.log('Search query:', query);
};

export function Error() {
	return <div>
		<Heading headingText='Search' level={1} appearance='big' />
		<Paragrah text={text} />
		<InputSearch onSearch={handleSearch} />
		<Heading headingText='Oops... Nothing found' level={2} appearance='small' />
	</div>;
}