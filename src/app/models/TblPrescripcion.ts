export class TblPrescripcion {
  constructor(
    public id: number,
    public prescripcionCode: string,
    public idPaciente: number,
    public idMedico: number,
    public duracionTratamiento: string,
    public idTipoPrescripcion: number,
    public idEstado: number,
    public createdAt: any,
    public updatedAt: any
  ) {
  }
}
