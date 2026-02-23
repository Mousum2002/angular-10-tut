export interface product{
    id:number
    name:string
    description:string
    brand:string
    gender: "MEN" | "WOMEN"
    category: string
    size:number[]
    color:string[]
    price:number
    discountPrice?:number
    is_in_inventory:boolean
    items_left:number
    imageURL:string
    slug:string
}