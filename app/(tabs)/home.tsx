import { InstantSearch } from 'react-instantsearch-hooks';
import { algoliaSearchClient } from '../../lib/algoliaClient';
import React, { useState } from 'react';
import { SearchBox } from '../../components/searchBox/SearchBox';
import { Container } from '../../components/layout/Layout';
import { Categories } from '../../components/categories/Categories';
import { ListingSection } from '../../components/listing-section/ListingSection';
import jsonListing from '../../components/listing-section/listing.json';
import { CategoriesModal } from '../../components/categoriesModal/CategoriesModal';
import { ListingSectionModal } from '../../components/listing-section-modal/ListingSectionModal';
import HamburgerIcon from '../../assets/svgs/hamburger.svg';
import ChickenIcon from '../../assets/svgs/chicken.svg';
import PizzaIcon from '../../assets/svgs/pizza.svg';
const listingItems = jsonListing;

const categoryItems = [
  { name: 'Burger', icon: <HamburgerIcon width={36} height={36} /> },
  { name: 'Pizza', icon: <PizzaIcon width={36} height={36} /> },
  { name: 'Chicken', icon: <ChickenIcon width={36} height={36} /> },
  { name: 'Burger', icon: <HamburgerIcon width={36} height={36} /> },
  { name: 'Pizza', icon: <PizzaIcon width={36} height={36} /> },
];

export default function Page() {
  const [categoriesModalVisible, setCategoriesModalVisible] = useState(false);
  const [listingModalVisible, setListingModalVisible] = useState(false);

  return (
    <Container>
      <InstantSearch searchClient={algoliaSearchClient} indexName='website'>
        <SearchBox />
      </InstantSearch>
      <Categories
        items={categoryItems}
        openCategoriesModal={() => setCategoriesModalVisible(true)}
      />
      <ListingSection
        openListingModal={() => setListingModalVisible(true)}
        items={listingItems.listing}
      />
      <CategoriesModal
        items={categoryItems}
        visibility={categoriesModalVisible}
        closeCategoriesModal={() => setCategoriesModalVisible(false)}
      />
      <ListingSectionModal
        items={listingItems.listing}
        visibility={listingModalVisible}
        closeCategoriesModal={() => setListingModalVisible(false)}
      />
    </Container>
  );
}
