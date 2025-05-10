# CreateTestimonialPayload

## Example Usage

```typescript
import { CreateTestimonialPayload } from "@trytestify/sdk/models/components";

let value: CreateTestimonialPayload = {
  authorName: "Jane Doe",
  text: "Absolutely fantastic!",
  socialUrl: "https://linkedin.com/in/janedoe",
  imageUrl: "https://example.com/avatar_jane.jpg",
  position: "CTO",
  companyName: "Innovate Corp",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `authorName`                        | *string*                            | :heavy_check_mark:                  | N/A                                 | Jane Doe                            |
| `text`                              | *string*                            | :heavy_check_mark:                  | N/A                                 | Absolutely fantastic!               |
| `socialUrl`                         | *string*                            | :heavy_check_mark:                  | N/A                                 | https://linkedin.com/in/janedoe     |
| `imageUrl`                          | *string*                            | :heavy_check_mark:                  | N/A                                 | https://example.com/avatar_jane.jpg |
| `position`                          | *string*                            | :heavy_minus_sign:                  | N/A                                 | CTO                                 |
| `companyName`                       | *string*                            | :heavy_minus_sign:                  | N/A                                 | Innovate Corp                       |