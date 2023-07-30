import { InstantSearch } from 'react-instantsearch-hooks';
import { Text, View } from 'react-native';
import { algoliaSearchClient } from '../../lib/algoliaClient';
import React from 'react';
import { SearchBox } from '../../components/searchBox/SearchBox';
import { Container } from '../../components/layout/Layout';
import { Categories } from '../../components/categories/Categories';
import { ListingSection } from '../../components/listing-section/ListingSection';
import jsonListing from '../../components/listing-section/listing.json';

const listingItems = jsonListing;

export default function Page() {
  return (
    <Container>
      <InstantSearch searchClient={algoliaSearchClient} indexName='website'>
        <SearchBox />
      </InstantSearch>
      <Categories />
      <ListingSection items={listingItems.listing} />
    </Container>
  );
}
