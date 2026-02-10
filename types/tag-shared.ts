import { TAG_KINDS } from "@/data/tags";

export type TagKind = (typeof TAG_KINDS)[number]["value"];

export interface TagBase {
    id: string;
    tag: string;
    kind: TagKind;
    isFilterable: boolean;
}

export interface ProjectTag {
    tagId: string;
    isPreview: boolean;
}
