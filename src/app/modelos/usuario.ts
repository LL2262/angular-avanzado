export class Usuario{

    constructor(
        public id: string,
        public nombre: string,
        public apellido: string,
        public email:string,
        public password: string,
        public rol: string,
        public image: string
    ){}
}