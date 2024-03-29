export type Project = {
    color: string;
    company: string;
    images: number;
    name: string;
    slug: string;
    stacks: string[];
    url: string;
    year: number;
};
export type ProjectWithId = Project & { id: number };
