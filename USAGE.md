<!-- Start SDK Example Usage [usage] -->
```typescript
import { Testify } from "@trytestify/sdk";

const testify = new Testify();

async function run() {
  const result = await testify.testimonials.get({
    spaceId: "clxkzq8e00000qzj9f9f9f9f9",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->