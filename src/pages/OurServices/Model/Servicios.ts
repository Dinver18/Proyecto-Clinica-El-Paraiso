interface SubSection {
    title: string;
    content: string;
}



export type Servicios = {
    id: string;
    title: string;
    content: string;
    subSections: SubSection[];
};