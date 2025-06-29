# TradeHub

## Overview  
TradeHub is a full-stack eCommerce web application built with Next.js and TypeScript. It allows users to browse, search, filter, and sort products, add them to a cart, and complete purchases through integrated automatic and manual payment options. Users also have a dashboard to track their orders in real-time.

## Live Demo  
[https://tradehub.devjunayed.xyz/](https://tradehub.devjunayed.xyz/)

## Repositories  
- Client Code: [https://github.com/devjunayed/trade-hub-client](https://github.com/devjunayed/trade-hub-client)  
- Server Code: [https://github.com/devjunayed/trade-hub-server](https://github.com/devjunayed/trade-hub-server)  

## Features  
- Product browsing with search, filter, and sorting functionalities  
- Shopping cart for adding and managing products  
- Automatic payment processing for seamless checkout  
- Manual payment option requiring users to submit payment details after offline payment  
- User dashboard for tracking order status and history  

## Technologies Used  
- **Frontend:**  
  - TypeScript  
  - Next.js  
  - Tailwind CSS  
  - Ant Design  
  - Redux Toolkit  

- **Backend:**  
  - Node.js  
  - Express  
  - MongoDB  
  - Mongoose  

- **Validation:**  
  - Zod  

## Getting Started

### Prerequisites  
- Node.js installed  
- MongoDB running or access to a MongoDB cloud instance  

### Installation  

1. Clone the repositories:  
   ```bash
   git clone https://github.com/devjunayed/trade-hub-client.git
   git clone https://github.com/devjunayed/trade-hub-server.git
    ````

2. Navigate to each project directory and install dependencies:

   ```bash
   cd trade-hub-client
   npm install

   cd ../trade-hub-server
   npm install
   ```
3. Configure environment variables for database and payment gateway credentials in both projects.
4. Run the development servers:

   ```bash
   # Run server
   cd trade-hub-server
   npm run dev

   # Run client (in new terminal)
   cd trade-hub-client
   npm run dev
   ```

## Usage

* Open your browser and visit `http://localhost:3000` to use the application locally.
* Create an account, browse products, add to cart, and complete orders.
* Track your orders via the dashboard.

## License

MIT License

## Contact

For questions or feedback, please reach out at [mdjunayed601@gmail.com](mailto:mdjunayed601@gmail.com).


