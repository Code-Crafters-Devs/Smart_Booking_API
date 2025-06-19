# API Examples

This document provides examples of API requests and responses for the application. Each example includes the HTTP method, endpoint, request body, and expected response.

## Authentication

### Login

**Request:**

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "token": "your_jwt_token",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

### Register

**Request:**

```
POST /api/auth/register
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "yourpassword",
  "name": "New User"
}
```

**Response:**

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "User registered successfully",
  "user": {
    "id": "124",
    "email": "newuser@example.com",
    "name": "New User"
  }
}
```

## User Management

### Get User Profile

**Request:**

```
GET /api/users/profile
Authorization: Bearer your_jwt_token
```

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "123",
  "email": "user@example.com",
  "name": "John Doe"
}
```

### Update User Profile

**Request:**

```
PUT /api/users/profile
Authorization: Bearer your_jwt_token
Content-Type: application/json

{
  "name": "John Updated"
}
```

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Profile updated successfully",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "John Updated"
  }
}
```

## Booking Management

### Create Booking

**Request:**

```
POST /api/bookings
Authorization: Bearer your_jwt_token
Content-Type: application/json

{
  "roomId": "456",
  "checkIn": "2023-10-01",
  "checkOut": "2023-10-05",
  "guestCount": 2
}
```

**Response:**

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "Booking created successfully",
  "booking": {
    "id": "789",
    "roomId": "456",
    "checkIn": "2023-10-01",
    "checkOut": "2023-10-05",
    "guestCount": 2
  }
}
```

### Get Booking Details

**Request:**

```
GET /api/bookings/789
Authorization: Bearer your_jwt_token
```

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "789",
  "roomId": "456",
  "checkIn": "2023-10-01",
  "checkOut": "2023-10-05",
  "guestCount": 2,
  "status": "confirmed"
}
```

## Room Management

### Get Room Availability

**Request:**

```
GET /api/rooms/availability?checkIn=2023-10-01&checkOut=2023-10-05
```

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "availableRooms": [
    {
      "id": "456",
      "type": "Deluxe Room",
      "price": 150
    },
    {
      "id": "457",
      "type": "Standard Room",
      "price": 100
    }
  ]
}
```

## Recommendations

### Get Recommendations

**Request:**

```
GET /api/recommendations
Authorization: Bearer your_jwt_token
```

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "recommendations": [
    {
      "id": "1",
      "title": "Best Hotels in New York",
      "description": "Explore the top-rated hotels in New York City."
    },
    {
      "id": "2",
      "title": "Budget-Friendly Stays",
      "description": "Find affordable accommodations for your next trip."
    }
  ]
}
```

## Conclusion

These examples serve as a reference for developers to understand how to interact with the API. For more detailed information, please refer to the API documentation in `swagger.yaml`.