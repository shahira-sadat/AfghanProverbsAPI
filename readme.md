# Afghan Proverbs & Sayings API
> This is a RESTful API for managing Afghan proverbs and sayings in Dari, Pashto, and their English translations. This API allows users to perform CRUD operations (Create, Read, Update, Delete) on Afghan proverbs and sayings, as well as filter them by category and search by keywords.


## Built With
- Backend: Node.js, Express.js
- Storage: JSON file (for simplicity), could be replaced with a database like PostgreSQL or MongoDB
- Format: JSON for all request/response bodies


## API Endpoints
- **GET /proverbs**: Get all proverbs (optionally filter by category or search by keyword)
- **GET /proverbs/:id**: Get a single proverb by its ID
- **POST /proverbs**: Add a new proverb
- **PUT /proverbs/:id**: Update an existing proverb
- **DELETE /proverbs/:id**: Delete a proverb
- **GET /proverbs/random**: Get a random proverb
- **GET /proverbs?category=category**: Filter proverbs by category

## Getting Started
To get a local copy up and running, follow these simple steps.

### Setup
```bash
git clone https://github.com/shahira-sadat/AfghanProverbsAPI
cd AfghanProverbsAPI
```

### Install
```bash
npm install
```

### Usage
```bash
node app.js
```

## API Usage Examples

### 📖 GET - Get All Proverbs

**Request**
```bash
GET http://localhost:3000/proverbs
```
**Response**
```json
[
  {
    "id": 1,
    "textDari": "آب که یک‌جا بماند، می‌گندد",
    "textPashto": "اوبه چې ودریږي، خوسا کېږي",
    "translationEn": "Water that stays still will rot.",
    "meaning": "Inaction leads to stagnation or decay.",
    "category": "wisdom"
  },
  {
    "id": 2,
    "textDari": "سیلی نقد به از حلوای نسیه",
    "textPashto": "نقد سیلی د نسیه حلوا نه ښه ده",
    "translationEn": "A slap in cash is better than a promise of sweets.",
    "meaning": "Something real and present is better than empty promises.",
    "category": "advice"
  }
]
```

### 📖 GET - Get a Single Proverb by ID

**Request**
```bash
GET http://localhost:3000/proverbs/1
```
**Response**
```json
{
  "id": 1,
  "textDari": "آب که یک‌جا بماند، می‌گندد",
  "textPashto": "اوبه چې ودریږي، خوسا کېږي",
  "translationEn": "Water that stays still will rot.",
  "meaning": "Inaction leads to stagnation or decay.",
  "category": "wisdom"
}
```



### ✏️ POST - Add a New Proverb

**Request**
```bash
POST http://localhost:3000/proverbs
```
Content-Type: application/json
```json
{
  "textDari": "توانا بود هر که دانا بود",
  "textPashto": "توانا هغه دی چې پوهاند وی",
  "translationEn": "He who is wise is capable.",
  "meaning": "Wisdom makes one capable of achieving great things.",
  "category": "wisdom"
}
```
**Response**
```json
{
  "id": 6,
  "textDari": "توانا بود هر که دانا بود",
  "textPashto": "توانا هغه دی چې پوهاند وی",
  "translationEn": "He who is wise is capable.",
  "meaning": "Wisdom makes one capable of achieving great things.",
  "category": "wisdom"
}
```



### ✏️ PUT - Update an Existing Proverb

**Request**
```bash
PUT http://localhost:3000/proverbs/6
```
Content-Type: application/json
```json
{
  "textDari": "توانا بود هر که دانا بود",
  "textPashto": "توانا هغه دی چې پوهاند وی",
  "translationEn": "The wise are capable.",
  "meaning": "Wisdom makes one capable of achieving great things.",
  "category": "wisdom"
}
```
**Response**
```json
{
  "id": 6,
  "textDari": "توانا بود هر که دانا بود",
  "textPashto": "توانا هغه دی چې پوهاند وی",
  "translationEn": "The wise are capable.",
  "meaning": "Wisdom makes one capable of achieving great things.",
  "category": "wisdom"
}
```


### ❌DELETE - Delete a Proverb

**Request**
```bash
DELETE http://localhost:3000/proverbs/6
```
**Response**
```json
{
  "id": 6,
  "textDari": "توانا بود هر که دانا بود",
  "textPashto": "توانا هغه دی چې پوهاند وی",
  "translationEn": "The wise are capable.",
  "meaning": "Wisdom makes one capable of achieving great things.",
  "category": "wisdom"
}
```

### Authors
👤 Shahira Sadat

- GitHub: [Shahira Sadat](https://github.com/shahira-sadat)
- Linkedin: [Shahira Sadat](https://www.linkedin.com/in/shahira-sadat)
- Gmail: [Email me](shahira.sadat1@gmail.com)

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

