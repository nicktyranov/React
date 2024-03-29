export interface MovieInterface {
  short: {
    name: string;
    image: string;
    description: string;
    aggregateRating: {
      ratingValue: string;
    };
    '@type': string;
    datePublished: string;
    genre: string[];
    duration: string,
    review: {
      dateCreated: string;
      name: string;
      reviewBody: string;
    };
    // Добавьте здесь другие свойства, если они есть внутри 'short'
  };
  imdbId: string; // Это свойство находится на том же уровне, что и 'short'
}
  
