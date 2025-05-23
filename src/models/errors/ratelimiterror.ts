/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RateLimitErrorData = {
  message: string;
};

export class RateLimitError extends Error {
  /** The original data that was passed to this error instance. */
  data$: RateLimitErrorData;

  constructor(err: RateLimitErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "RateLimitError";
  }
}

/** @internal */
export const RateLimitError$inboundSchema: z.ZodType<
  RateLimitError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
})
  .transform((v) => {
    return new RateLimitError(v);
  });

/** @internal */
export type RateLimitError$Outbound = {
  message: string;
};

/** @internal */
export const RateLimitError$outboundSchema: z.ZodType<
  RateLimitError$Outbound,
  z.ZodTypeDef,
  RateLimitError
> = z.instanceof(RateLimitError)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RateLimitError$ {
  /** @deprecated use `RateLimitError$inboundSchema` instead. */
  export const inboundSchema = RateLimitError$inboundSchema;
  /** @deprecated use `RateLimitError$outboundSchema` instead. */
  export const outboundSchema = RateLimitError$outboundSchema;
  /** @deprecated use `RateLimitError$Outbound` instead. */
  export type Outbound = RateLimitError$Outbound;
}
