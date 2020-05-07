export class TblMedico {
  constructor(
    public id: number,
    public idMedico: number,
    public rcmMedico: string,
    public nombreMedico: string,
    public apellidosMedico: string,
    public direccionMedico: string,
    public idEstablecimiento: string,
    public idComuna: string,
    public emailMedico: string,
    public fonoMedico: string,
    public idEspecialidad: number,
    public firmaMedico: string
  ) {
  }
}
