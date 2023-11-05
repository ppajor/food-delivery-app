import { InstantSearch } from 'react-instantsearch-hooks';
import { algoliaSearchClient } from '../../lib/algoliaClient';
import React, { useEffect, useState } from 'react';
import { SearchBox } from '../../components/searchBox/SearchBox';
import { Container } from '../../components/layout/Layout';
import { Categories } from '../../components/categories/Categories';
import { ListingSection } from '../../components/listing-section/ListingSection';
import { CategoriesModal } from '../../components/categoriesModal/CategoriesModal';
import { ListingSectionModal } from '../../components/listing-section-modal/ListingSectionModal';
import HamburgerIcon from '../../assets/svgs/hamburger.svg';
import ChickenIcon from '../../assets/svgs/chicken.svg';
import PizzaIcon from '../../assets/svgs/pizza.svg';
import { ngrokURL } from '../../lib/constants';

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
  const [categoriesData, setCategoriesData] = useState(null);

  const getRestaurants = async () => {
    const res = await fetch(`${ngrokURL}/api/restaurants`);
    const data = await res.json();
    // console.log('data', data);
    if (data) setRestaurantData(data);
  };

  const getCategories = async () => {
    const res = await fetch(`${ngrokURL}/api/categories`);
    const data = await res.json();
    console.log('data', data);
    if (data) setCategoriesData(data);
  };

  useEffect(() => {
    getRestaurants();
    getCategories();
  }, []);

  return (
    <Container>
      <InstantSearch searchClient={algoliaSearchClient} indexName='website'>
        <SearchBox />
      </InstantSearch>
      {categoriesData && (
        <Categories
          items={categoriesData}
          openCategoriesModal={() => setCategoriesModalVisible(true)}
        />
      )}

      {restaurantData && (
        <ListingSection
          openListingModal={() => setListingModalVisible(true)}
          items={restaurantData}
        />
      )}
      {categoriesData && (
        <CategoriesModal
          items={categoriesData}
          visibility={categoriesModalVisible}
          closeCategoriesModal={() => setCategoriesModalVisible(false)}
        />
      )}
      {restaurantData && (
        <ListingSectionModal
          title='Popularne teraz'
          items={restaurantData}
          visibility={listingModalVisible}
          closeCategoriesModal={() => setListingModalVisible(false)}
        />
      )}
    </Container>
  );
}
