import { TagKindCard } from "./_components/TagKindCard";
import { getTags } from "./actions";

const TAG_KINDS = [
    { value: "tech", label: "Technology" },
    { value: "service", label: "Service" },
    { value: "tool", label: "Tool" },
    { value: "platform", label: "Platform" },
    { value: "meta", label: "Meta" },
] as const;

export default async function TagsPage() {
    const result = await getTags();
    const tags = result.data || [];

    // Group tags by kind
    const tagsByKind = TAG_KINDS.map((kind) => ({
        kind: kind.value,
        label: kind.label,
        tags: tags.filter((tag) => tag.kind === kind.value),
    }));

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold font-display text-foreground">
                    Tags
                </h1>
                <p className="text-muted-foreground">
                    Manage tags to organize and categorize your projects
                </p>
            </div>

            <div className="grid gap-6">
                {tagsByKind.map((group) => (
                    <TagKindCard
                        key={group.kind}
                        kind={group.kind}
                        kindLabel={group.label}
                        tags={group.tags}
                    />
                ))}
            </div>
        </div>
    );
}
