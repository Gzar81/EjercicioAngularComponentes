export interface Persona { //ng g i interfaces/imagen --type=interface
    id?: number; // la ? indica que este campo no es obligatorio
    name: string;
    surname: string;
}
