export class TblEstablecimiento {
  constructor(
    public id: number,
    public rutEstablecimiento: string,
    public nombreEstablecimiento: string,
    public direccionEstablecimiento: string,
    public idComuna: number,
    public fonoEstablecimiento: string,
    public emailEstablecimiento: string,
    public idImagen: number,
    public createdAt: any,
    public updatedAt: any
  ) {
  }
}
