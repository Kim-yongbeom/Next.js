import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const productData: Prisma.productsCreateInput[] = Array.apply(
    null,
    Array(100)
).map((_, index) => ({
    name: `Dark Jean ${index + 1}`,
    contents: `{"blocks":[{"key":"djnrp","text":"this is a dark jean","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/${(index + 1) % 10 === 0 ? 10 : (index + 1) % 10}.jpg`,
    price: Math.random() * (100000 - 20000) + 20000,

}))

async function main() {
    
}

main()
.then(
    async() => {
        await prisma.$disconnect()
    }
)
.catch(async(e)=>{
    console.log(e);
    await prisma.$disconnect()
    process.exit(1)
})