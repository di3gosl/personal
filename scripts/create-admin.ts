/**
 * Script to create an admin user
 *
 * Usage: npx tsx scripts/create-admin.ts
 */

import "dotenv/config";
import bcrypt from "bcryptjs";
import * as readline from "readline";
import prisma from "../lib/prisma";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    console.log("\nAdmin User Creation Script\n");

    try {
        const name = await question("Enter admin name: ");
        const email = await question("Enter admin email: ");
        const password = await question("Enter admin password (min 6 chars): ");

        if (password.length < 6) {
            console.error("\nPassword must be at least 6 characters");
            process.exit(1);
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            console.log("\nUser already exists. Updating to admin...");
            await prisma.user.update({
                where: { email },
                data: {
                    name,
                    password: hashedPassword,
                    role: "ADMIN",
                    isActive: true,
                    isDeleted: false,
                },
            });
            console.log("User updated to admin successfully!");
        } else {
            await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    role: "ADMIN",
                    isActive: true,
                },
            });
            console.log("\nAdmin user created successfully!");
        }

        console.log(`\nEmail: ${email}`);
        console.log("Password: [hidden]");
        console.log("\nYou can now login at /admin/login\n");
    } catch (error) {
        console.error("\nError:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
        rl.close();
    }
}

main();
