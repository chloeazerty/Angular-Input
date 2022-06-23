import { Skill } from "./skill.model";

export class Developer{
    constructor(
        public name: string,
        public firstName: string,
        public age: number,
        public sexe:string, 
        public bio:string, 
        public skillList: Skill[]
    ){}
}