export class SoundResultVO{
  public id: string;
  public url: string;
  public name: string;
  public author: string;
  public license: string;
  public preview_url: string;
  public spectrogram: string;

  constructor(id:string, url:string, name:string, author:string, license:string, preview_url:string, spectrogram:string=null){
    this.id = id;
    this.url = url;
    this.name = name;
    this.author = author;
    this.license = license;
    this.preview_url = preview_url;
    this.spectrogram = spectrogram;
  }
}
