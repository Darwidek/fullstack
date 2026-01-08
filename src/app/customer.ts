export class Customer { // class equals to springboot entity its not necessary initalize attributes here here

    public id!: number // id opcional sprinboot will asign it automatically
    // public firstName: string;
    // public LastName: string;
    // public email: string

    // constructor( id: number,  firstName: string,  LastName: string, email: string) {

    //    this.id=id;
    //    this.firstName=firstName;
    //    this.LastName=LastName;
    //    this.email=email;

    // }


    // constructor(public id: number, public firstName: string, public lastName: string, public email: string) { // simplified code
    // }

    constructor(public firstName: string, public lastName: string, public email: string) { // simplified code
    }


    
}
