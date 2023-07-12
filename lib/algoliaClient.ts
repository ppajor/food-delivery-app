import algoliasearch from 'algoliasearch';

const ALGOLIA_APP_ID='X8I360F9S7';
const ALGOLIA_API_SEARCH_TOKEN='1e4ef7cbb268f6db150facb5979aa4fb';

export const algoliaSearchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_SEARCH_TOKEN
);
