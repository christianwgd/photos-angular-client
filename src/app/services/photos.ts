export class Photo {
    public id: number;
    public name: string;
    public imagefile: string;

    constructor(id: number, name: string, imagefile: string) {
        this.id = id;
        this.name = name;
        this.imagefile = imagefile;
    }
}
