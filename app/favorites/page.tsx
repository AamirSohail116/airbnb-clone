import React from "react";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();

  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    <EmptyState
      title="No favorites found"
      subTitle="Looks like you have no favorite listings."
    />;
  }

  return (
    <div>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
