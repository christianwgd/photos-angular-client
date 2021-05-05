export class Photo {
    public id: number;
    public name: string;
    public imagefile: string;
    public thumb: string;

    constructor(id: number, name: string, imagefile: string, thumb: string) {
        this.id = id;
        this.name = name;
        this.imagefile = imagefile;
        this.thumb = thumb;
    }
}