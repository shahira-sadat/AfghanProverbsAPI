# Afghan Proverbs & Sayings API & Frontend App

> A fullstack CRUD application for managing Afghan proverbs and sayings in Dari, Pashto, and their English translations.  
Built with Node.js, Express, EJS, Bootstrap and JSON storage.  
The backend API allows CRUD operations and category-based filtering, while the frontend EJS app provides a clean, responsive interface for interacting with the API.
> 
<img width="1431" alt="Screen Shot 2025-05-14 at 6 22 00 PM" src="https://github.com/user-attachments/assets/bd8e2847-6a59-4e7b-95f5-b174ca0a0f5e" />

---

## Live Demo

Can check the live demo [here]()

---

## 📦 Built With

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templates with Express for server-side rendering
- **Styling**: Bootstrap 5, custom CSS
- **Data Storage**: JSON file (for simplicity)
- **HTTP Requests (Frontend)**: Axios
- **Form Method Override**: method-override for PUT and DELETE requests via forms

---

## 🌐 API Endpoints (Assignment 4)

- `GET /proverbs` — Get all proverbs (optionally filter by category or search keyword)
- `GET /proverbs/:id` — Get a single proverb by ID
- `POST /proverbs` — Add a new proverb
- `PUT /proverbs/:id` — Update an existing proverb
- `DELETE /proverbs/:id` — Delete a proverb
- `GET /proverbs/random` — Get a random proverb
- `GET /proverbs?category=category` — Filter proverbs by category

---

## 🎨 Frontend Features (Assignment 5)

- 📜 **Homepage**: Lists all proverbs with Dari, Pashto, English, category, and details button
- 🎲 **Random Proverb**: View a random proverb
- ➕ **Add New Proverb**: Form with validation
- ✏️ **Edit Proverb**: Edit existing proverbs (pre-filled form)
- 🗑️ **Delete Proverb**: Delete with confirmation dialog
- 🔍 **Search / Filter**: Search by keyword and filter by category
- 📱 **Responsive, Bootstrap-styled layout**

---

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
Backend runs at: 
```bash
http://localhost:3000/proverbs
```
Frontend runs at: 
```bash
http://localhost:3000/
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


### 📖 GET - Get a Random Proverb

**Request**
```bash
GET http://localhost:3000/proverbs/random
```
**Response**
```json
{
  "id": 3,
  "textDari": "هر که باد بکارد، طوفان درو می‌کند",
  "textPashto": "څوک چې باد کري، توپان رېبي",
  "translationEn": "He who sows the wind reaps the storm.",
  "meaning": "Bad actions lead to worse consequences.",
  "category": "wisdom"
}
```


### 📖 Get - Filter Proverbs by Category

**Request**
```bash
GET http://localhost:3000/proverbs?category=wisdom
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
    "id": 3,
    "textDari": "هر که باد بکارد، طوفان درو می‌کند",
    "textPashto": "څوک چې باد کري، توپان رېبي",
    "translationEn": "He who sows the wind reaps the storm.",
    "meaning": "Bad actions lead to worse consequences.",
    "category": "wisdom"
  },
  {
    "id": 4,
    "textDari": "با یک گل بهار نمی‌شود",
    "textPashto": "یوه ګله پسرلی نه کېږي",
    "translationEn": "One flower doesn't bring spring.",
    "meaning": "One small change isn't enough to make a big difference.",
    "category": "wisdom"
  }
]

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

