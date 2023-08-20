import { InstantSearch } from 'react-instantsearch-hooks';
import { Text, View } from 'react-native';
import { algoliaSearchClient } from '../../lib/algoliaClient';
import React, { useState } from 'react';
import { SearchBox } from '../../components/searchBox/SearchBox';
import { Container } from '../../components/layout/Layout';
import { Categories } from '../../components/categories/Categories';
import { ListingSection } from '../../components/listing-section/ListingSection';
import jsonListing from '../../components/listing-section/listing.json';
import { CategoriesModal } from '../../components/categoriesModal/CategoriesModal';

const listingItems = jsonListing;

export default function Page() {
  const [categoriesModalVisible, setCategoriesModalVisible] = useState(false);

  return (
    <Container>
      <InstantSearch searchClient={algoliaSearchClient} indexName='website'>
        <SearchBox />
      </InstantSearch>
      <Categories openCategoriesModal={() => setCategoriesModalVisible(true)} />
      <ListingSection items={listingItems.listing} />
      <CategoriesModal
        visibility={categoriesModalVisible}
        closeCategoriesModal={() => setCategoriesModalVisible(false)}
      />
    </Container>
  );
}
