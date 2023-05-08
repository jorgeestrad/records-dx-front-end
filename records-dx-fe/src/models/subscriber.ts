export interface Subscriber  {
    id : number;
    subscriberTypeId: number;
    countryId: number; 
    firstname: string;
    lastname:string;
    alias:string;
    code:string;
    qsl:string;
    phone:string;
    addres:string,
    createdAt:Date;
    email: string;
    acceptDataPolicy:boolean;
    acceptAdvertaising:boolean;
    nui:string;
    userName:string;
    password:string;
    isPublic:boolean;
    isEnabled:boolean
}

