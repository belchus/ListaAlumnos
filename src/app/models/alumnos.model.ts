export class Alumnos {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string,
      public number: number,
      public fechaDeEntregable: Date,
    ) {}
  }