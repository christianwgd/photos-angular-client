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

export class Address {
  public formatted: string;

  constructor(display_name: string, formatted: string) {
    this.formatted = this.formatted;
  }
}

export class User {
  public url;
  public name;

  constructor(url: string) {
    this.url = url;
    this.name = '';
  }
}

export class Event {
  public url;
  public name;

  constructor(url: string) {
    this.url = url;
    this.name = '';
  }
}

export class Tag {

}


export class PhotoMeta {
  public imagefile: string;
  public name: string;
  public timestamp: string;
  public uploaded: string;
  public uploaded_by: User;
  public address: Address;
  public event: Event;
  public tags: Tag;

  constructor(
    imagefile: string, name: string, timestamp: string,
    uploaded: string, uploaded_by: User, address: Address,
    event: Event, upload: string, tags: Tag
  ) {
    this.imagefile = imagefile;
    this.name = name;
    this.timestamp = timestamp;
    this.uploaded = uploaded;
    this.uploaded_by = uploaded_by;
    this.address = address;
    this.event = event;
    this.tags = tags;
  }
}


