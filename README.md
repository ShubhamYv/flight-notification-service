# Table of Contents
- [Notification Service](#notification-service)
  - [Description](#description)
  - [Key Functionalities](#key-functionalities)
    - [Ticket Creation](#ticket-creation)
    - [Email Notifications](#email-notifications)
    - [RabbitMQ Integration](#rabbitmq-integration)
    - [Error Handling](#error-handling)
  - [Technologies Used](#technologies-used)
  - [Setup](#setup)
  - [Related Microservices](#related-microservices)

## Notification Service

### Description
The **Flight Notification Service** is a crucial component of the Flight Booking Application, responsible for creating tickets and sending email notifications. This service is integrated with RabbitMQ to manage and process notifications efficiently.

### Key Functionalities

#### Ticket Creation
- **Create Ticket**: Handles the creation of tickets associated with user bookings.

#### Email Notifications
- **Send Booking Confirmations**: Sends confirmation emails to users upon successful booking.

#### RabbitMQ Integration
- **Queue Subscription**: Consumes messages from RabbitMQ to trigger the sending of email notifications.

#### Error Handling
- **Error Logging**: Catches and logs errors during the ticket creation and email sending processes.

### Technologies Used
- **Node.js**: JavaScript runtime for building scalable applications.
- **Express.js**: Web framework for handling HTTP requests.
- **Nodemailer**: Sends emails using Gmail.
- **amqplib**: Integrates RabbitMQ for messaging.
- **Sequelize**: ORM for interacting with the MySQL database.
- **winston**: Manages logging within the service.

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/notification-service.git
   cd notification-service
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   Copy the `.env.example` file to `.env` and add the necessary environment variables. Example `.env` file:

   ```
    PORT=<Your_Server_Port>
    GMAIL_EMAIL=<Your_Gmail_Email>
    GMAIL_PASSWORD=<Your_Gmail_Password>
    ACTIVEMQ_URL=<RabbitMQ_Connection_URL>
    ACTIVEMQ_CHANNEL=<RabbitMQ_Channel_Name>
   ```

4. **Start the server**

   ```bash
   npm run dev
   ```

   The server will run on the port specified in the `.env` file.

### Related Microservices
Check out the other microservices in the Skybook Flight Ecosystem:

1. **Flight Service**: Manages airplanes, airports, cities, and flights.

   [Flight Services Repository](#)

2. **Flight Booking Service**: Handles flight bookings, seat management, and payments.

   [Flight Booking Service Repository](#)

3. **Flight API Gateway**: Secures user authentication, validates requests, and routes them efficiently.

   [Flight API Gateway Repository](#)

Explore these services to see how they work together for a seamless flight booking experience!

---
