# PROJECT CONTEXT – PixelMuseum Mobile

## Project Overview

PixelMuseum Mobile is a React Native mobile application developed with Expo.

The application is the official mobile version of the existing PixelMuseum web application. Its purpose is to provide users with an intuitive way to explore digital artworks and exhibitions from their mobile devices while preserving the design, terminology and user experience of the web application.

The project is being developed as a university assignment and will later be extended with AI-powered features.

---

## Main Features

The application allows users to:

- Register and log in
- Browse artworks
- Browse exhibitions
- View artwork details
- View exhibition details
- Manage their own artworks
- Manage their profile
- Mark artworks as favorites
- View gallery locations on a map

---

## Design Guidelines

The mobile application should preserve the visual identity of the existing PixelMuseum web application.

Design characteristics:

- Purple color palette
- White background
- Rounded cards
- Minimal and modern interface
- Clean typography
- Large artwork images
- Consistent spacing
- Mobile-friendly layout

The application should feel like the official mobile version of PixelMuseum.

---

## Mobile Screens

The application will include at least these screens:

- Welcome
- Login
- Register
- Home
- Gallery
- Artwork Details
- Exhibition List
- Exhibition Details
- Favorites
- Add Artwork
- Edit Artwork
- Profile
- Map
- Settings

---

## Backend

The backend will use Supabase.

Main entities:

- Users
- Artworks
- Artwork Images
- Categories
- Exhibitions
- Favorites

---

## Authentication

Authentication will be implemented using Supabase Authentication.

Features:

- User registration
- User login
- Persistent session
- User logout

---

## CRUD Features

Users can:

- Create artworks
- Read artworks
- Update their artworks
- Delete their artworks

---

## Native Mobile Features

The application will use native mobile functionality:

- Camera / Image Picker
- Maps
- Local notifications

---

## Technologies

- React Native
- Expo
- TypeScript
- Supabase
- React Navigation

---

## Project Structure

The project follows a modular architecture.

src/

- components
- screens
- navigation
- services
- hooks
- types
- constants
- utils

---

## Development Rules

When implementing new features:

- Preserve the existing PixelMuseum terminology.
- Keep the navigation similar to the web application.
- Reuse components whenever possible.
- Write clean, readable and modular code.
- Do not introduce unnecessary features that are not part of the project requirements.

The goal is to create a scalable mobile application that can later be extended with AI-based functionality.
