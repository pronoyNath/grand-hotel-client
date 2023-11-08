# Grand Hotel Website

## Website Live Link

[Grand Hotel Website](https://grand-hotel-daa65.web.app)

## Overview

Welcome to the Grand Hotel website, a visually captivating and feature-rich platform designed to enhance the hotel booking and user experience. This README.md file provides an overview of the major features and functionalities of the website.

## Major Features

1. **Stunning Imagery and Parallax Scrolling**
   - The home page features high-quality images and videos of hotel rooms and amenities, creating an enticing visual experience for users. Parallax scrolling adds depth to the visuals, enhancing the user's experience.

2. **Interactive Map**
   - The website includes an interactive map that displays the hotel's location, nearby attractions, and points of interest. This feature helps users plan their stay and explore the area.

3. **Special Offers and Promotions**
   - Prominent display of special offers, discounts, and promotions on the home page using eye-catching banners and call-to-action buttons, making it easy for users to find and book the best deals.

4. **User Testimonials and Ratings**
   - Authentic user testimonials and ratings are showcased on the website, building trust and confidence among potential guests. A testimonial carousel provides variety and social proof.

5. **User Authentication with JWT**
   - Users can create an account with their email and password. Additionally, users can log in using Google authentication via Firebase. JWT authentication is implemented to secure private routes, ensuring a secure and seamless experience for registered users.

## Additional Functionality

- **Navigation Bar**
  - The navigation bar provides links to the "Rooms" page and "My Bookings" page.
  - The "My Bookings" page is accessible only to authenticated users.

- **Rooms Page**
  - Display a list of available rooms.
  - Implement a filter system to filter rooms by price range (server-side or client-side).
  - Users can view room review counts.
  - Users can post reviews for rooms after booking.

- **Room Details Page**
  - Provides detailed information about each room, including description, price per night, room size, availability, room images, and special offers.
  - Users can book available rooms with a date picker.
  - Users can view a room summary of their booking before confirming.

- **Booking Cancellation**
  - Users can cancel a booking before 1 day from the booking day.
  - Users can view a list of their current bookings and delete bookings.

- **Update Booking Date**
  - Users can view a list of their current bookings and update the booking date.

- **Review System**
  - Users can post reviews for rooms they have booked.
  - Reviews include a username, rating, comment, and timestamp.
  - Reviews are shown on the room details page for other users.

- **Access Control**
  - Users who are not logged in cannot book a room and are redirected to the login page.
  - Non-logged-in users can view basic room details but cannot post reviews.

- **404 Page**
  - A custom 404 page is created with an exciting image/gif and a "Back to home" button to redirect users to the home page.

## Installation and Setup

Please refer to the project's documentation and code for installation and setup instructions.

## Feedback and Contributions

We welcome your feedback and contributions to enhance the Grand Hotel website. Feel free to open issues, provide feedback, or submit pull requests to improve this project.

Thank you for visiting the Grand Hotel website!

