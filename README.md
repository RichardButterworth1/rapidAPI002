# LinkedIn Scraper Service

## Setup
1. Copy `.env.example` to `.env` and fill in your RapidAPI key.
2. Install dependencies: `npm install`
3. Start server: `npm start`

## Usage
POST `/search` with JSON body:
```json
{
  "organization": "Apple",
  "jobTitles": ["Data Scientist","CTO","VP Sales"]
}
```

Response:
```json
{
  "results":[...],
  "meta":{...}
}
