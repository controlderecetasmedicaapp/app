export class TblUsuario {
  constructor(
    public id: number,
    public rutUsuario: string,
    public password: string,
    public idTipoUsuario: number
  ) {
  }
}
