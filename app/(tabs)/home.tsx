import { InstantSearch } from 'react-instantsearch-hooks';
import { Text, View } from 'react-native';
import { algoliaSearchClient } from '../../lib/algoliaClient';
import React from 'react';
import { SearchBox } from '../../components/searchBox/SearchBox';
import { Container } from '../../components/layout/Layout';
import { Categories } from '../../components/categories/Categories';

export default function Page() {
  return (
    <Container>
      <InstantSearch searchClient={algoliaSearchClient} indexName='website'>
        <SearchBox />
      </InstantSearch>
      <Categories />
    </Container>
  );
}
