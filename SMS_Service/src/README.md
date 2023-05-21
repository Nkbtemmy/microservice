
# API-rate-limiter

API rate limiter that tracks and enforces limits on requests made by individual clients within specific time windows and on a monthly basis. Additionally, you need to enforce system-wide limits to prevent excessive requests across the entire system.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)
[![Build](https://github.com/Nkbtemmy/-API-rate-limiter-/actions/workflows/build.ci.yaml/badge.svg)](https://github.com/Nkbtemmy/-API-rate-limiter-/actions/workflows/build.ci.yaml)

## Technologies used

- Docker
- Docker compose
- Nodejs
- MongoDB

## Run Deployment 

start server

```bash
  RUN docker-compose up --build
```
Test it locally
```bash
  Navigate to localhost:8007/api-docs
```


## Tech Stack

**Server:** Node, Express

**Deployment:** Docker, Docker-compose

**Dependencies:** Nodemailer, Telesignal, Vonage, express-rate-limit, apicache, morgan 


## Run Locally
make project directory

```bash
  mkdir API-rate-limit
```
Go to the project directory

```bash
  cd API-rate-limit
```

Clone the project

```bash
  git clone https://github.com/Nkbtemmy/-API-rate-limiter-.git .
```



Install dependencies

```bash
  yarn install
```

Provide environment variables

- For Windows
```bash
  copy  .env.example .env
```

- For Lunix
```bash
  cp .env.example .env
```

Start the server

```bash
  yarn dev
```
Test the Endpoint

```bash
  navigate to {host}:{PORT}/api-docs and start by creating subscription and copy its ID
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`HOST`

`TELESIGNAL_CUSTOMER_ID`

`TELESIGNAL_API_KEY`

`TELESIGNAL_END_POINT`

`VONAGE_API_KEY`

`VONAGE_API_SECRET`

`VONAGE_BRAND_NAME`

`JWT_SECRET`

`DB_CONNECT`

`SERVICE_USERNAME`

`SERVICE_PASSWORD`

`TRANSPORTER_SERVICE`


## Deployment

To deploy this project run

```bash
  docker-compose up --build
```


## Documentation

[Documentation](https://api-rate-limiter-0pqt.onrender.com/api-docs)


## Features

- Send SMS Notification
- Send Email Notification



## 🚀 About Me
I'm a full stack developer who is currently working in the software engineering industry, where my daily responsibilities include collaborating with a team of engineers to design, build, and implement high-quality software products.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://imanzi.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emmanuel-nkubito-36b242155/)


## Screenshots

![Three clusters Running](https://res.cloudinary.com/http-voicetoworld-netlify-app/image/upload/v1684403681/Screenshot_2023-05-18_113330_ksqyeo.png)

![Docker-compose ps](https://res.cloudinary.com/http-voicetoworld-netlify-app/image/upload/v1684403681/Screenshot_2023-05-18_113330_ksqyeo.png)

![Swwagger Documentation](https://res.cloudinary.com/http-voicetoworld-netlify-app/image/upload/v1684507154/Screenshot_2023-05-19_163728_rxrfaa.png)


