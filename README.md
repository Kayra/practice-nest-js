# practice-nest-js

This is the code written while roughly following [Digital Ocean's](https://www.digitalocean.com/) ["Getting Started with NestJS" tutorial](https://www.digitalocean.com/community/tutorials/getting-started-with-nestjs).

Technologies used:

- nest.js: 9.0.0
- node: 16.19.0
- npm: 8.19.3

## Set up

Install the node application:

```bash
cd bookstore-nest
npm i
```

Start the nest server:

```
npm run start:dev
```

## API Requests

**If you're using the [insomnia rest client](https://insomnia.rest/), be sure to import the [insomnia project](https://github.com/Kayra/practice-sails-js/blob/main/docs/practice-sails-insomnia_2022-12-28.json).**

### **GET** Health Check `/ping`

Example request:

```bash
curl --request GET \
  --url http://localhost:3000/
```

Example response:

```bash
Hello World!
```

### **POST** Books Create `/books`

Example request:

```bash
curl --request POST \
  --url http://localhost:3000/books \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 7,
	"title": "Seventh book",
	"description": "This is the description for the seventh book",
	"author": "中山理恵"
}'
```

Example response:

```bash
[
	{
		"id": 1,
		"title": "First book",
		"description": "This is the description for the first book",
		"author": "Olususi Oluyemi"
	},
	{
		"id": 2,
		"title": "Second book",
		"description": "This is the description for the second book",
		"author": "John Barry"
	},
	{
		"id": 4,
		"title": "Fourth book",
		"description": "This is the description for the fourth book",
		"author": "Christian nwamba"
	},
	{
		"id": 5,
		"title": "Fifth book",
		"description": "This is the description for the fifth book",
		"author": "Chris anderson"
	},
	{
		"id": 6,
		"title": "Sixth book",
		"description": "This is the description for the sixth book",
		"author": "Olususi Oluyemi"
	},
	{
		"id": 7,
		"title": "Seventh book",
		"description": "This is the description for the seventh book",
		"author": "中山理恵"
	}
]
```

### **DELETE** Books Delete `/books?bookId={id}`

Example request:

```bash
curl --request DELETE \
  --url 'http://localhost:3000/books?bookId=6'
```

Example response:

```bash
[
	{
		"id": 1,
		"title": "First book",
		"description": "This is the description for the first book",
		"author": "Olususi Oluyemi"
	},
	{
		"id": 2,
		"title": "Second book",
		"description": "This is the description for the second book",
		"author": "John Barry"
	},
	{
		"id": 3,
		"title": "Third book",
		"description": "This is the description for the third book",
		"author": "Clement Wilfred"
	},
	{
		"id": 4,
		"title": "Fourth book",
		"description": "This is the description for the fourth book",
		"author": "Christian nwamba"
	},
	{
		"id": 5,
		"title": "Fifth book",
		"description": "This is the description for the fifth book",
		"author": "Chris anderson"
	}
]
```

### **GET** Books Get List `/books`

Example request:

```bash
curl --request GET \
  --url http://localhost:3000/books
```

Example response:

```bash
[
	{
		"id": 1,
		"title": "First book",
		"description": "This is the description for the first book",
		"author": "Olususi Oluyemi"
	},
	{
		"id": 2,
		"title": "Second book",
		"description": "This is the description for the second book",
		"author": "John Barry"
	},
	{
		"id": 3,
		"title": "Third book",
		"description": "This is the description for the third book",
		"author": "Clement Wilfred"
	},
	{
		"id": 4,
		"title": "Fourth book",
		"description": "This is the description for the fourth book",
		"author": "Christian nwamba"
	},
	{
		"id": 5,
		"title": "Fifth book",
		"description": "This is the description for the fifth book",
		"author": "Chris anderson"
	},
	{
		"id": 6,
		"title": "Sixth book",
		"description": "This is the description for the sixth book",
		"author": "Olususi Oluyemi"
	}
]
```

### **GET** Books By Id `/books/{id}`

Example request:

```bash
curl --request GET \
  --url http://localhost:3000/books/5
```

Example response:

```bash
{
	"id": 5,
	"title": "Fifth book",
	"description": "This is the description for the fifth book",
	"author": "Chris anderson"
}
```