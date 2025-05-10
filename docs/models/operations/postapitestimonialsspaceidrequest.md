# PostApiTestimonialsSpaceIdRequest

## Example Usage

```typescript
import { PostApiTestimonialsSpaceIdRequest } from "@trytestify/sdk/models/operations";

let value: PostApiTestimonialsSpaceIdRequest = {
  spaceId: "clxkzq8e00000qzj9f9f9f9f9",
  createTestimonialPayload: {
    authorName: "Jane Doe",
    text: "Absolutely fantastic!",
    socialUrl: "https://linkedin.com/in/janedoe",
    imageUrl: "https://example.com/avatar_jane.jpg",
    position: "CTO",
    companyName: "Innovate Corp",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `spaceId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        | clxkzq8e00000qzj9f9f9f9f9                                                                  |
| `createTestimonialPayload`                                                                 | [components.CreateTestimonialPayload](../../models/components/createtestimonialpayload.md) | :heavy_check_mark:                                                                         | Data for the new testimonial.                                                              |                                                                                            |