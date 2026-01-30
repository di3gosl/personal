import { TAG_KINDS } from "@/data/tags";
import { z } from "zod";

// Enum values from Prisma schema
const tagKindValues = TAG_KINDS.map((kind) => kind.value);

// Tag form schema
export const tagSchema = z.object({
    tag: z
        .string()
        .min(1, "Tag name is required")
        .max(50, "Tag name must be less than 50 characters"),
    kind: z.enum(tagKindValues, {
        message: "Tag kind is required",
    }),
    isFilterable: z.boolean().default(false),
    order: z.coerce.number().min(0).default(0),
});

export type TagFormData = z.infer<typeof tagSchema>;
