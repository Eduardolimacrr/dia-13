class Computador{
  Tipo
  Processador
  Video
  Armazenamento
  MemoriaRam
  Ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
     this.Tipo = tipo;
     this.Processador = processador;
     this.Video = video;
     this.Armazenamento = armazenamento;
     this.MemoriaRam = memoriaRam
     this.Ssd = ssd;
 }
 ExibirInformações(){
    console.log('Informações do computador');
    console.log(`Tipo: ${this.Tipo}`);
    console.log(`Processador: ${this.Processador}`);
    console.log(`Video: ${this.Video}`);
    console.log(`Armazenamento: ${this.Armazenamento} GB `);
    console.log(`MemoriaRam: ${this.MemoriaRam} GB `);
    console.log(`SSD: ${this.Ssd}`)
 }
}

const MeuComputador = new Computador('Notebook', 'Ryzen 7', 'Dedicado', 1000, 16,  true );
MeuComputador.ExibirInformações();