export{}
//1.
interface Mountain {
    name: string;
    height : number;
}

let Mounts: Mountain[] = [
   {
    name: "Kilimanjaro",
    height: 19341
   },
   {
   name: "Everest",
   height: 29029
   },
   {
    name: "Denali",
    height: 20310
   }
]
    function findNameOfTallestMountain (mountain: Mountain[]): string {
        let tallmountain:Mountain = mountain.reduce((prev, current) => (current.height > prev.height)?
    current : prev);
    return tallmountain.name;
    }

    console.log(findNameOfTallestMountain(Mounts))


//2.
interface Products{
    name: string;
    price: number;
}

let products: Products[] =[
    {
        name: "TV",
        price: 500
    },
    {
        name: "Xbox series x",
        price: 450
    },
    {
        name: "Gaming Chair",
        price: 250
    }
]

function calcAverageProductPrice (products: Products[]):number{
    let average: number = products.reduce((total: number, current :Products) => (total + current.price),0) /products.length
return average;
   
// products.forEach((p:Product) => {
    //     if()
    // })
}
console.log(calcAverageProductPrice(products))

//3. 

interface InventoryItem {
    product: Products;
    quantity: number;
};

let inventory: InventoryItem[] = [
    {
        product: {name: "motor", price: 10.00},
        quantity: 10
    },
    {
        product: {name: "sensor", price: 12.50},
        quantity: 4
    },
    {
        product: {name: "LED", price: 1.00},
        quantity: 20
    }
];

function calcInventoryValue (inventory: InventoryItem[]) :number{
    let grandtotal: number = inventory.reduce((total: number, current :InventoryItem) => total + (current.product.price * current.quantity) ,0)
    return grandtotal;


}