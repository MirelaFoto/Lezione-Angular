 
 
 
 export interface IAddress{
    city: string,
    street: string,
    postalCode: string
}





//enums
export enum Role {
    STAFF='staff',
    STUDENT='student',
    MANAGER='manager',
    ADMIN='admin'

}
export enum Gender{
    MALE='male',
    FEMALE= 'female',
    OTHER= 'other'
}


// il oggetto
export interface IUser {
    id: number,
    name: string,
    surname: string,
    age:number,
    dateOfBirth: string,
    address: IAddress,
    role: Role.STAFF,
        username: string,
        profilePhotoUrl: string,
       
    	
        gender: Gender.MALE
    }



