# gRPC Energy Price Service

gRPC-Web service that responds to perf-lab's `energyprice.PriceService/GetPrice` calls.

## Run locally

```bash
npm install
npm run generate   # if proto changed
npm start
```

Server listens on port 8089. In perf-lab, configure the gRPC URL to `http://localhost:8089` for local testing.

## API

- **POST** `/energyprice.PriceService/GetPrice` - Returns random price (1-998) like electric-company-be
