## A Full Stack Web Application

This is an application used to practice authentication and user registration. Users can create an account and log in to their specific profile.

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Learn More](#learn-more)

## About

This project is a full-stack web application that provides user authentication features including sign-up, sign-in, email verification, password reset, and forgot password functionality. It is built using Next.js, TypeScript, MongoDB for data storage, react-hot-toast for toast notification and Tailwind CSS for styling.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React-Hot-toast](https://react-hot-toast.com/)

## Features

- User Registration (Sign Up)
- Email Verification
- User Authentication (Sign In)
- Password Reset
- Forgot Password
- Secure Password Storage (bcrypt)
- Responsive UI (Tailwind CSS)
- Toast Notification (React hot toast)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and install Node.js](https://nodejs.org/).
- MongoDB: [Configure MongoDB](https://docs.mongodb.com/manual/installation/).

### Installation

1. Clone the repository:

```bash

   git clone https://github.com/yourusername/your-project.git

```

2. Change into the project directory:

```bash

  cd your-project

```

3. Install dependencies:

```bash

   npm install

```

4. Set up environment variables:

Create a .env file in the project root and add the following environment variables with your configuration:

```bash

    MONGODB_URI=your_mongodb_url
    TOKEN_SECRET=your_jwt_secret
    DOMAIN=your_domain
    NODEMAILERUSER = your_node_mailer_user
    NODEMAILERPASSWORD = your_node_mailer_password

```

5. Start the development server:

```bash

   npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Usage

- Access the application in your web browser by navigating to http://localhost:3000.
- Sign up for a new account to get started.
- Explore the different authentication features including sign-in, email verification, password reset, and forgot password.

## Learn More

To learn more, take a look at the following resources:

- [Complete NextJS Fullstack Authentication Course](https://www.youtube.com/watch?v=eaQc7vbV4po&t=13417s&ab_channel=HiteshChoudhary) - this tutorial helped with the base of the project
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
