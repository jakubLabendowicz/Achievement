import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    const profile = await prisma.profile.create({
        data: {
            slug: "jalabendowicz",
            logo: "test.com",
            name: "Łabendowicz",
            article: {
              title: "Hello, I’m Kuba, a Salesforce developer and IT student.",
              subtitle: "I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.",
              content: "John Doe",
              color: "John Doe",
              image: "test.com",
              links: [
                {
                    title: "Linkedin",
                    url: "test.com",
                    icon: "test.com"
                }
              ]
            }
        }
    }) 
    
    console.log(profile);
}

main()