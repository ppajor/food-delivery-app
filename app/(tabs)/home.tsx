import { InstantSearch } from 'react-instantsearch-hooks';
import { algoliaSearchClient } from '../../lib/algoliaClient';
import React, { useEffect, useState } from 'react';
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
import Constants from 'expo-constants';

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
  const [restaurantData, setRestaurantData] = useState(null);

  const getRestaurants = async () => {
    const api = 'https://64a5-176-122-214-72.ngrok-free.app';
    const res = await fetch(`${api}/api/restaurants`);
    const data = await res.json();
    // console.log('data', data);
    if (data) setRestaurantData(data);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <Container>
      <InstantSearch searchClient={algoliaSearchClient} indexName='website'>
        <SearchBox />
      </InstantSearch>
      <Categories
        items={categoryItems}
        openCategoriesModal={() => setCategoriesModalVisible(true)}
      />
      {restaurantData && (
        <ListingSection
          openListingModal={() => setListingModalVisible(true)}
          items={restaurantData}
        />
      )}
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
