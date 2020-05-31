import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeatureRooms from "../Components/FeatureRooms";
import { RoomContext } from "../context";
import Button from "../Components/StyledHero";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeatureRooms></FeatureRooms>
      <Button> Hello </Button>
    </>
  );
}
