export class SoundResultVO{
  public id: string;
  public url: string;
  public provider: string;
  public name: string;
  public author: string;
  public license: string;
  public preview_url: string;
  public spectrogram: string;

  constructor(id:string, url:string, provider:string=null, name:string=null, author:string=null, license:string=null, preview_url:string=null, spectrogram:string=null){
    this.id = id;
    this.url = url;
    this.provider = provider;
    this.name = name;
    this.author = author;
    this.license = license;
    this.preview_url = preview_url;
    this.spectrogram = spectrogram;
  }
}
