import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRandom = (max: number, min: number) => {
    return Math.floor(Math.random()*(max-min) + min)
}

const sneakers = [
    {
        name: `Sneakers 1`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 1,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 2`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 2,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 3`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 4`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 4,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 5`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 5,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 6`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 6,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 7`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 7,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 8`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 8,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 9`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 9,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Sneakers 10`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 10,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
]

const tShrit = [
    {
        name: `T-Shirt 1`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 1,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 2`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 2,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 3`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 4`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 4,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 5`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 5,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 6`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 6,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 7`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 7,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 8`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 8,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 9`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 9,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `T-Shirt 10`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 10,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
]

const pants = [
    {
        name: `Pants 1`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 1,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 2`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 2,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 3`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 4`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 4,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 5`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 5,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 6`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 6,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 7`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 7,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 8`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 8,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 9`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 9,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Pants 10`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 10,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
]

const cap = [
    {
        name: `Cap 1`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 1,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 2`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 2,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 3`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 4`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 4,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 5`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 5,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 6`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 6,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 7`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 7,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 8`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 8,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 9`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 9,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Cap 10`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 10,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
]

const hoodie = [
    {
        name: `Hoodie 1`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 1,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 2`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 2,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 3`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 3,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 4`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 4,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 5`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 5,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 6`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 6,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 7`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 7,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 8`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 8,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 9`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 9,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
    {
        name: `Hoodie 10`,
        contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다."}]}`,
        category_id: 10,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9och11jjovmWd1i9fXIjVAEaP3xucbHBGE5aEsfRaOk8w5IUIQ_QYsoQWFULFNVsHQY&usqp=CAU',
        price: getRandom(300000, 100000)
    },
]

const productData: Prisma.productsCreateInput[] = [
    ...sneakers,
    ...tShrit,
    ...pants,
    ...cap,
    ...hoodie,
]

async function main() {
    await prisma.products.deleteMany({})

    for(const p of productData) {
        const product = await prisma.products.create({
            data: p
        })
        console.log(`Created id: ${product.id}`)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })