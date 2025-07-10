<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->