export interface employee
{
    employee_id:string;
    status:string;
    name:string;
    skills: any;
    profile: any;
    manager: string;
    wfm_manager: string;
    experience:number;
}


export interface skills{
    skillid:number;
    name:string;
}

export interface profile{
    profile_id:number;
    name:string;
}