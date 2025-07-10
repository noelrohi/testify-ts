# Testimonials
(*testimonials*)

## Overview

### Available Operations

* [get](#get)
* [create](#create)

## get

### Example Usage

```typescript
import { Testify } from "@trytestify/sdk";

const testify = new Testify();

async function run() {
  const result = await testify.testimonials.get({
    spaceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TestifyCore } from "@trytestify/sdk/core.js";
import { testimonialsGet } from "@trytestify/sdk/funcs/testimonialsGet.js";

// Use `TestifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const testify = new TestifyCore();

async function run() {
  const res = await testimonialsGet(testify, {
    spaceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("testimonialsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiTestimonialsRequest](../../models/operations/getapitestimonialsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TestimonialsResponse](../../models/components/testimonialsresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.StandardError | 400                  | application/json     |
| errors.StandardError | 500                  | application/json     |
| errors.APIError      | 4XX, 5XX             | \*/\*                |

## create

### Example Usage

```typescript
import { Testify } from "@trytestify/sdk";

const testify = new Testify();

async function run() {
  const result = await testify.testimonials.create({
    spaceId: "clxkzq8e00000qzj9f9f9f9f9",
    createTestimonialPayload: {
      authorName: "Jane Doe",
      text: "Absolutely fantastic!",
      socialUrl: "https://linkedin.com/in/janedoe",
      imageUrl: "https://example.com/avatar_jane.jpg",
      position: "CTO",
      companyName: "Innovate Corp",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TestifyCore } from "@trytestify/sdk/core.js";
import { testimonialsCreate } from "@trytestify/sdk/funcs/testimonialsCreate.js";

// Use `TestifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const testify = new TestifyCore();

async function run() {
  const res = await testimonialsCreate(testify, {
    spaceId: "clxkzq8e00000qzj9f9f9f9f9",
    createTestimonialPayload: {
      authorName: "Jane Doe",
      text: "Absolutely fantastic!",
      socialUrl: "https://linkedin.com/in/janedoe",
      imageUrl: "https://example.com/avatar_jane.jpg",
      position: "CTO",
      companyName: "Innovate Corp",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("testimonialsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiTestimonialsSpaceIdRequest](../../models/operations/postapitestimonialsspaceidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Testimonial](../../models/components/testimonial.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.StandardError  | 400                   | application/json      |
| errors.RateLimitError | 429                   | application/json      |
| errors.StandardError  | 500                   | application/json      |
| errors.APIError       | 4XX, 5XX              | \*/\*                 |