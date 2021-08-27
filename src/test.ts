export function test1(){
    return 'test1'
}

export function test2(){
    return { value: 'test2'}
}

export function tax(amount : number):number{
    return amount ** 2;
}

export function getFormattedValue(value:number | null){
    if(value === null)  return `-- pt`
    return `${value.toFixed()} pt`
}

export function greet(name?:string){
    return `${name?.toUpperCase()}`;
}

class Creature{
    breathe(){}
}

class Animal extends Creature{
    shakeTail(){}
}

class Human extends Creature{
    greet(){}
}

function action(creature:Creature | Animal | Human){
    const c0 = creature
    c0.breathe()
    if(creature instanceof Animal){
        const c1 = creature
        return c1.shakeTail()
    }

    const c2 = creature
    if(creature instanceof Human){
        const c3 = creature
        return c3.greet()
    }

    const c4 = creature
    return c4.breathe()
}



