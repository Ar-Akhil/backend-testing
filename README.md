# Bakend-Testing

A testing server created using express and mangodb as database.
\*id's are auto generated,look into the list of books for id.
\*\*Testing was done in postman.

## API Reference

#### Put item

```http
  PUT https://backend-testing-nu.vercel.app/books
```

\*requirs to add data into body section in json format to push the data

| Parameter     | Type     | Description                     |
| :------------ | :------- | :------------------------------ |
| `title`       | `string` | **Required**.title of the book  |
| `author`      | `string` | **Required**.author of the book |
| `publishyear` | `number` | **Required**.year of the book   |

#### Get all items

```http
  GET https://backend-testing-nu.vercel.app/books
```

#### Get item by id

```http
  GET https://backend-testing-nu.vercel.app/books/{:id}*
```

#### Update item by id

```http
  PUT https://backend-testing-nu.vercel.app/books/{:id}*
```

#### Delete item by id

```http
  DELETE https://backend-testing-nu.vercel.app/books/{:id}*
```
