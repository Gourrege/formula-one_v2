export interface MongoF1Data {

    _id:string
    firstName:string
    lastName:string
    Team:string
    Number:string
    Code:string
    imageURL:string
}
export class New_F1_Driver implements MongoF1Data
{
    _id!:string
    firstName:string
    lastName:string
    Team:string
    Number:string
    Code:string
    imageURL:string

    constructor(firstName:string,lastName:string,Team:string,Number:string,Code:string,imageURL:string)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.Team=Team
        this.Number=Number
        this.Code=Code
        this.imageURL=imageURL

    }

}
