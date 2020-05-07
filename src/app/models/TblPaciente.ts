export class TblPaciente {
  constructor(
    public id: number,
    public idPaciente: number,
    public nombrePaciente: string,
    public apellidoPaciente: string,
    public direccionPaciente: string,
    public fonoPaciente: string,
    public emailPaciente: string,
    public fecha: any,
    public peso: any,
    public altura: any,
    public idSexo: any,
    public idComuna: any,
    public createdAt: any,
    public updatedAt: any
  ) {
  }
}
