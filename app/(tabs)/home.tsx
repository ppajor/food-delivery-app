import { InstantSearch } from 'react-instantsearch-hooks';
import { Text, View } from 'react-native';
import { algoliaSearchClient } from '../../lib/algoliaClient';
import React from 'react';
import { SearchBox } from '../../components/searchBox/SearchBox';
import { Layout } from '../../components/layout/Layout';
import { Categories } from '../../components/categories/Categories';

export default function Page() {
  return (
    <Layout>
      <InstantSearch searchClient={algoliaSearchClient} indexName='website'>
        <SearchBox />
      </InstantSearch>
      <Categories />
    </Layout>
  );
}
