# Testimonial

## Example Usage

```typescript
import { Testimonial } from "@trytestify/sdk/models/components";

let value: Testimonial = {
  id: "clxkzq8e00000qzj9f9f9f9f9",
  authorName: "John Doe",
  text: "This product is amazing!",
  socialUrl: "https://twitter.com/johndoe",
  imageUrl: "https://example.com/avatar.jpg",
  position: "CEO",
  companyName: "Acme Inc.",
  createdAt: "2024-01-01T12:00:00Z",
  updatedAt: "2024-01-01T12:00:00Z",
  isPublished: true,
  spaceId: "clxkzq8e00000qzj9f9f9f9f9",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | N/A                            | clxkzq8e00000qzj9f9f9f9f9      |
| `authorName`                   | *string*                       | :heavy_check_mark:             | N/A                            | John Doe                       |
| `text`                         | *string*                       | :heavy_check_mark:             | N/A                            | This product is amazing!       |
| `socialUrl`                    | *string*                       | :heavy_check_mark:             | N/A                            | https://twitter.com/johndoe    |
| `imageUrl`                     | *string*                       | :heavy_check_mark:             | N/A                            | https://example.com/avatar.jpg |
| `position`                     | *string*                       | :heavy_minus_sign:             | N/A                            | CEO                            |
| `companyName`                  | *string*                       | :heavy_minus_sign:             | N/A                            | Acme Inc.                      |
| `createdAt`                    | *string*                       | :heavy_check_mark:             | N/A                            | 2024-01-01T12:00:00Z           |
| `updatedAt`                    | *string*                       | :heavy_check_mark:             | N/A                            | 2024-01-01T12:00:00Z           |
| `isPublished`                  | *boolean*                      | :heavy_check_mark:             | N/A                            | true                           |
| `spaceId`                      | *string*                       | :heavy_check_mark:             | N/A                            | clxkzq8e00000qzj9f9f9f9f9      |