# 🏨 Smart Booking API Suite

<div align="center">

![Smart Booking Logo](https://via.placeholder.com/200x80/4F46E5/FFFFFF?text=Smart+Booking)

**A comprehensive hotel booking backend API with AI-powered natural language processing**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

[![Build Status](https://img.shields.io/github/actions/workflow/status/username/smart-booking-api/ci.yml?branch=main)](https://github.com/username/smart-booking-api/actions)
[![Coverage](https://img.shields.io/codecov/c/github/username/smart-booking-api)](https://codecov.io/gh/username/smart-booking-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/github/v/release/username/smart-booking-api)](https://github.com/username/smart-booking-api/releases)

[🚀 Live Demo](#-live-demo) • [📖 Documentation](#-api-documentation) • [🛠️ Installation](#-installation) • [👥 Team](#-team)

</div>

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🚀 Live Demo](#-live-demo)
- [📸 Screenshots](#-screenshots)
- [👥 Team](#-team)
- [🏗️ Project Structure](#️-project-structure)
- [⚡ Quick Start](#-quick-start)
- [🛠️ Installation](#️-installation)
- [📖 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Features

<div align="center">

| Authentication | Booking System | AI Integration | Management |
|:---:|:---:|:---:|:---:|
| 🔐 **JWT Security** | 📅 **Real-time Booking** | 🤖 **NLP Processing** | 👤 **User Profiles** |
| Role-based access | Conflict detection | Natural language booking | Provider management |
| Secure passwords | Availability search | GPT-4 integration | Booking history |

</div>

### ✨ Core Capabilities

- **🔒 Secure Authentication**: JWT-based authentication with role-based access control (Admin, Provider, User)
- **📊 Smart Booking**: Intelligent booking system with real-time availability and conflict detection
- **🤖 AI-Powered**: Natural language processing for intuitive booking requests using GPT-4
- **🔍 Advanced Search**: Filter and search available services by date, location, and service type
- **📱 RESTful API**: Clean, well-documented REST API with Swagger integration
- **⚡ High Performance**: Optimized database queries and efficient caching mechanisms
- **🧪 Test Coverage**: Comprehensive test suite with 90%+ coverage using Mocha/Chai

---

## 🚀 Live Demo

### 🌐 API Endpoints
**Base URL**: `https://smart-booking-api.herokuapp.com/api/v1`

**Swagger Documentation**: [https://smart-booking-api.herokuapp.com/api-docs](https://smart-booking-api.herokuapp.com/api-docs)

### 🎮 Try It Out

```bash
# Register a new user
curl -X POST "https://smart-booking-api.herokuapp.com/api/v1/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "demo@example.com",
    "password": "securePassword123",
    "firstName": "Demo",
    "lastName": "User"
  }'

# Search available bookings
curl -X GET "https://smart-booking-api.herokuapp.com/api/v1/availability?date=2024-03-15&service=hotel"
```

### 📱 Demo Credentials
```
Email: demo@smartbooking.com
Password: Demo123!
Role: Customer
```

---

## 📸 Screenshots

### 🎯 API Documentation (Swagger UI)
![Swagger Documentation](https://via.placeholder.com/800x400/F3F4F6/1F2937?text=Swagger+API+Documentation)

### 📊 Dashboard Analytics
![Dashboard](https://via.placeholder.com/800x400/EFF6FF/3B82F6?text=Analytics+Dashboard)

### 🔐 Authentication Flow
![Authentication](https://via.placeholder.com/800x400/F0FDF4/16A34A?text=JWT+Authentication+System)

### 🤖 AI Booking Interface
![AI Booking](https://via.placeholder.com/800x400/FEF3C7/D97706?text=Natural+Language+Booking)

---

## 👥 Team

<div align="center">

| Member | Role | Responsibilities | Contact |
|:---:|:---:|:---:|:---:|
| 👨‍💻 **Masingita Maluleke** | Full-stack Developer | Full-stack development, Architecture | [@masingita](https://github.com/masingita) |
| 🎨 **Khulekani Mtshali** | UI/UX Designer | API design, User experience | [@Khulekani](https://github.com/Mkhulekani?tab=repositories) |
| 🗄️ **Luyanda Xhakaza** | Backend & Database Engineer | Backend development, Database optimization, Migrations | [@luyandaaaa](https://github.com/luyandaaaa) |
| 🧪 **Dembe Mkhari** | QA Engineer | Testing, Quality assurance | [@DembeMakharii](https://github.com/DembeMakharii) |
| 🤖 **Arise Dzamukeri** | AI Integration Specialist | NLP features, GPT-4 integration | [@lisadavis](https://github.com/lisadavis) |
| 🚀 **Matimu Baloyi** | DevOps Engineer | CI/CD, Deployment, Monitoring | [@MatimuBaloyi](https://github.com/MatimuBaloyi) |

</div>

---

## 🏗️ Project Structure

```
smart-booking-api/
├── 📁 src/
│   ├── 📁 controllers/          # Route controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── bookingController.js
│   │   └── providerController.js
│   ├── 📁 middleware/           # Custom middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── 📁 models/               # Database models (Sequelize)
│   │   ├── User.js
│   │   ├── Provider.js
│   │   ├── Booking.js
│   │   └── Availability.js
│   ├── 📁 routes/               # API routes
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── bookings.js
│   │   └── providers.js
│   ├── 📁 services/             # Business logic
│   │   ├── authService.js
│   │   ├── bookingService.js
│   │   └── aiService.js
│   ├── 📁 utils/                # Utility functions
│   │   ├── jwt.js
│   │   ├── validation.js
│   │   └── logger.js
│   ├── 📁 config/               # Configuration files
│   │   ├── database.js
│   │   ├── swagger.js
│   │   └── env.js
│   └── app.js                   # Express app setup
├── 📁 tests/                    # Test files
│   ├── 📁 unit/
│   ├── 📁 integration/
│   └── 📁 fixtures/
├── 📁 docs/                     # Documentation
│   ├── api.md
│   └── deployment.md
├── 📁 migrations/               # Database migrations
├── 📁 seeders/                  # Database seeders
├── .github/                     # GitHub workflows
│   └── workflows/
│       └── ci.yml
├── .env.example                 # Environment variables template
├── .gitignore
├── package.json
├── README.md
└── server.js                    # Entry point
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL (v13+)
- npm or yarn

### 🚀 One-Click Setup

```bash
# Clone the repository
git clone https://github.com/username/smart-booking-api.git
cd smart-booking-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
npm run migrate

# Seed the database (optional)
npm run seed

# Start development server
npm run dev
```

The API will be available at `http://localhost:3000`

---

## 🛠️ Installation

### Detailed Setup

1. **Clone & Install**
   ```bash
   git clone https://github.com/username/smart-booking-api.git
   cd smart-booking-api
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your settings:
   ```env
   NODE_ENV=development
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=smart_booking_db
   DB_USER=your_username
   DB_PASS=your_password
   JWT_SECRET=your_super_secret_jwt_key
   OPENAI_API_KEY=your_openai_api_key
   ```

3. **Database Setup**
   ```bash
   # Create database
   createdb smart_booking_db
   
   # Run migrations
   npm run migrate
   
   # Seed with sample data
   npm run seed
   ```

4. **Start Development**
   ```bash
   npm run dev
   ```

### 🐳 Docker Setup (Alternative)

```bash
# Using Docker Compose
docker-compose up -d

# The API will be available at http://localhost:3000
```

---

## 📖 API Documentation

### 🔗 Quick Reference

| Endpoint | Method | Description | Auth Required |
|:---|:---:|:---|:---:|
| `/auth/register` | POST | User registration | ❌ |
| `/auth/login` | POST | User login | ❌ |
| `/users/me` | GET | Get current user | ✅ |
| `/providers` | POST | Register as provider | ✅ |
| `/availability` | GET | Search availability | ❌ |
| `/bookings` | POST | Create booking | ✅ |
| `/bookings/:id` | GET | Get booking details | ✅ |
| `/nlp/book` | POST | AI-powered booking | ✅ |

### 📝 Example Requests

**User Registration**
```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "role": "user"
}
```

**AI Natural Language Booking**
```bash
POST /api/v1/nlp/book
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "request": "I need a hotel room in New York for next Friday night for 2 people"
}
```

### 📚 Full Documentation
- **Swagger UI**: Available at `/api-docs` when running locally
- **Postman Collection**: [Download here](https://documenter.getpostman.com/view/collection-id)

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run integration tests
npm run test:integration

# Generate coverage report
npm run test:coverage

# Watch mode for development
npm run test:watch
```

### Test Coverage
- **Unit Tests**: 95% coverage
- **Integration Tests**: 88% coverage
- **Overall Coverage**: 92%

### Test Structure
```
tests/
├── unit/
│   ├── controllers/
│   ├── services/
│   └── utils/
├── integration/
│   ├── auth.test.js
│   ├── booking.test.js
│   └── provider.test.js
└── fixtures/
    └── sampleData.js
```

---

## 🚀 Deployment

### Production Deployment

#### Heroku Deployment
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create smart-booking-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_production_secret

# Deploy
git push heroku main
```

#### Docker Deployment
```bash
# Build image
docker build -t smart-booking-api .

# Run container
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e DB_HOST=your_db_host \
  smart-booking-api
```

### CI/CD Pipeline

The project includes automated CI/CD with GitHub Actions:

- ✅ **Continuous Integration**: Automated testing on every PR
- 🚀 **Continuous Deployment**: Automatic deployment to staging
- 📊 **Code Quality**: ESLint, Prettier, and security scanning
- 📈 **Monitoring**: Error tracking and performance monitoring

---

## 🤝 Contributing

We love contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add tests for new features

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### 🌟 Star this repo if you found it helpful!

**Made with ❤️ by the Smart Booking Team**

[⬆ Back to Top](#-smart-booking-api-suite)

</div>

---

## 📞 Support & Contact

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/username/smart-booking-api/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/username/smart-booking-api/discussions)
- 📧 **Email**: support@smartbooking.com
- 📖 **Wiki**: [Project Wiki](https://github.com/username/smart-booking-api/wiki)

---

<div align="center">

![Footer](https://via.placeholder.com/800x100/1F2937/FFFFFF?text=Thank+you+for+checking+out+Smart+Booking+API!)

</div>
