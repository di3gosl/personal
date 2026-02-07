import { TAG_KINDS } from "@/data/tags";

export type Tag = {
    id: string;
    tag: string;
    kind: (typeof TAG_KINDS)[number]["value"];
    isFilterable: boolean;
    _count: {
        projects: number;
    };
};

export type TagKindCardProps = {
    kind: (typeof TAG_KINDS)[number]["value"];
    kindLabel: string;
    tags: Tag[];
};
