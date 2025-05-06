# TestimonialsResponse

## Example Usage

```typescript
import { TestimonialsResponse } from "@trytestify/sdk/models/components";

let value: TestimonialsResponse = {
  testimonials: [
    {
      id: "clxkzq8e00000qzj9f9f9f9f9",
      authorName: "John Doe",
      text: "This product is amazing!",
      socialUrl: "https://twitter.com/johndoe",
      imageUrl: "https://example.com/avatar.jpg",
      createdAt: "2024-01-01T12:00:00Z",
      updatedAt: "2024-01-01T12:00:00Z",
      isPublished: true,
      spaceId: "clxkzq8e00000qzj9f9f9f9f9",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `testimonials`                                                     | [components.Testimonial](../../models/components/testimonial.md)[] | :heavy_check_mark:                                                 | N/A                                                                |