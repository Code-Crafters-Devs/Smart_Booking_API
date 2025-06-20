# Project Title

A brief description of your project goes here. This project is a web application that allows users to manage bookings, authenticate, and interact with providers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Context](#context)
- [Hooks](#hooks)
- [Services](#services)
- [Redux](#redux)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd frontend
npm install
```

## Usage

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## Components

The application consists of several components organized into directories:

- **Auth**: Contains components for user authentication.
  - `LoginForm.jsx`
  - `RegisterForm.jsx`
  
- **Booking**: Contains components related to booking functionalities.
  - `BookingForm.jsx`
  - `BookingList.jsx`
  - `NLPBookingInput.jsx`
  
- **Provider**: Contains components for provider-related functionalities.
  - `AvailabilityCalendar.jsx`
  - `ProviderDashboard.jsx`
  
- **Admin**: Contains components for admin functionalities.
  - `UserManagement.jsx`
  - `Reports.jsx`
  
- **Common**: Contains common components used throughout the application.
  - `Header.jsx`
  - `Footer.jsx`
  - `RecommendationCard.jsx`

## Context

The application uses React Context for state management:

- `AuthContext.jsx`: Provides authentication state and methods.
- `BookingContext.jsx`: Provides booking state and methods.

## Hooks

Custom hooks are used for encapsulating logic:

- `useAuth.js`: Provides authentication-related functionality.
- `useBookings.js`: Provides booking-related functionality.
- `useRecommendations.js`: Provides recommendation-related functionality.

## Services

Services are used for API calls:

- `api.js`: General API functions.
- `auth.js`: Authentication-related API functions.
- `booking.js`: Booking-related API functions.
- `nlp.js`: Natural language processing-related API functions.

## Redux

The application uses Redux for state management:

- **Slices**: 
  - `authSlice.js`: Manages authentication state.
  - `bookingSlice.js`: Manages booking state.
  - `providerSlice.js`: Manages provider state.
  
- `store.js`: Configures the Redux store.
- `actions.js`: Contains action creators for dispatching actions.

## Testing

The application includes tests for components and integration:

- Component tests are located in `src/tests/components/`.
- Integration tests are located in `src/tests/integration/`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.