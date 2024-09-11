import React from "react";
import BookingForm from "../forms/BookingForm";
import RouteCard from "../utils/RouteCard";
import Carousel from "../utils/Carousel";

const MainContent = () => {
  // JSON array containing data for each route
  const routeData = [
    {
      origin: "Karachi",
      destination: "Lahore",
      price: "4999",
      imageSrc:
        "https://media.istockphoto.com/id/1704060584/photo/the-great-badshahi-moque-1673-mughal-architecture.webp?a=1&b=1&s=612x612&w=0&k=20&c=lv4m8t_yu00C8dpccadE7auOT-0dZfi6xn4bePWVGq0=",
    },
    {
      origin: "Islamabad",
      destination: "Peshawar",
      price: "3500",
      imageSrc:
        "https://media.istockphoto.com/id/1869101462/photo/islamia-college-in-peshawar-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkzwhy1p3eXWlnWF4q1m8LPbf7yQP8CoiDxO6JGmFu4=",
    },
    {
      origin: "Quetta",
      destination: "Karachi",
      price: "6000",
      imageSrc:
        "https://images.unsplash.com/photo-1606511490662-b2c5be7d95a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF6YXIlMjBlJTIwcXVhaWR8ZW58MHx8MHx8fDA%3D",
    },
    {
      origin: "Multan",
      destination: "Bahawalpur",
      price: "1500",
      imageSrc:
        "https://images.unsplash.com/photo-1583919685494-464abba2d5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFoYXdhbHB1ciUyQyUyMFBha2lzdGFufGVufDB8fDB8fHww",
    },
  ];

  // Mapping route data to RouteCard components
  const cards = routeData.map((route, index) => (
    <RouteCard
      key={index}
      origin={route.origin}
      destination={route.destination}
      price={route.price}
      imageSrc={route.imageSrc}
    />
  ));

  return (
    <div className="content flex-grow p-4 overflow-y-auto">
      <BookingForm />
      <h1 className="font-bold text-center mt-4">Offered Routes</h1>
      <Carousel cards={cards} />
      <h1 className="font-bold text-center mt-4">Daewoo Routes</h1>
      <Carousel cards={cards} />
      <h1 className="font-bold text-center mt-4">Kohistan Routes</h1>
      <Carousel cards={cards} />
    </div>
  );
};

export default MainContent;
