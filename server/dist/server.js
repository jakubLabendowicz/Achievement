"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const profile = prisma.profile.create({
    data: {
        slug: "John Doe",
        logo: "John Doe",
        name: "John Doe",
        title: "John Doe",
        subtitle: "John Doe",
        description: "John Doe",
        color: "John Doe",
        image: "John Doe",
        links: ["John Doe"]
    }
});
console.log(profile);
