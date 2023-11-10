//Utility Types

//1.partial
interface Assignment{
    studentId:string,
    title:string,
    grade:number,
    verified?:boolean
}

const updateAssignment=(assign:Assignment,propsToUpdate:Partial<Assignment>):Assignment=>{
    return {...assign,...propsToUpdate}
}


const assign1:Assignment={
    studentId:"12334",
    title:"fp",
    grade:0,
}
console.log(updateAssignment(assign1,{grade:33}));
const assignGraded:Assignment=updateAssignment(assign1,{grade:33})



//2. required and Readonly
const recordAssignment=(assign:Required<Assignment>):Assignment=>{
    return assign;
}
const assignVer:Readonly<Assignment>={...assignGraded,verified:true}
console.log(assignVer);
//assignVer.grade=10
console.log(assignGraded);
//recordAssignment(assignGraded)
recordAssignment({...assignGraded,verified:true})



//3. Record
const hex:Record<string,string>={
    red:"FF0000",
    green:"00FF00",
    blue:"0000FF"
}

type Students="Sara" |"Kelly"
type LetterGrade="A" | "B" |"C"

const finalGrades:Record<Students,LetterGrade>={
    Sara:"B",
    "Kelly":"A"
}
console.log(finalGrades);
console.log(hex);

interface Grades{
    a1:number,
    a2:number
}
const gradeData:Record<Students,Grades>={
    Sara:{a1:85,a2:99},
    Kelly:{a1:76,a2:88}
}
console.log(gradeData);




//4. Pick and omit
type AssignRes=Pick<Assignment,"studentId"|"grade">
const score:AssignRes={
    studentId:"1233",
    grade:1
}

type AssignPreview=Omit<Assignment,"verified"|"grade">
const preview:AssignPreview={
    studentId:"12",
    title:"final project"
}


//5. Extract and Exclude
//----not work with interface
type adjustGrade=Exclude<LetterGrade,"C">
type highGrade=Extract<LetterGrade,"A"|"B">
const x:adjustGrade="A"
const y:adjustGrade="B"
//const x:adjustGrade="C"
console.log(x,y);



//6. NonNullable
type AllPossibleGrades="Ankit" | "Raj" |" AJ " |null|undefined
type nameOnly=NonNullable<AllPossibleGrades>

//7.Return type
type newAssign={title:string,points:number}
const createNA=(title:string,points:number):newAssign=>{
    return {title,points}
}