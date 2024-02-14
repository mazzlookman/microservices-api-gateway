import supertest from "supertest";
import {web} from "../../src/app/web.js";
import fs from "node:fs";

const readFileSync = fs.readFileSync("D:\\CodingTraining\\Development\\NodeJS\\microservices-me\\api-gateway\\test\\media\\base64-image.txt","utf-8");

describe("Media service test", () => {
    it("should can upload image", async () => {
        const res = await supertest(web)
            .post("/media")
            .send({
                image: readFileSync,
            });
        expect(res.status).toBe(200);
        expect(res.body.data.id).toBeDefined();
    });

    it("should can't upload image (400)", async () => {
        const res = await supertest(web)
            .post("/media")
            .send({
                image: `${readFileSync}123`,
            });
        expect(res.status).toBe(400);
    });

    it("should get all images", async () => {
        const res = await supertest(web)
            .get("/media");

        expect(res.status).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0);
    });

    it('should can delete image', async () => {
        const create = await supertest(web)
            .post("/media")
            .send({
                image: readFileSync,
            });

        const res = await supertest(web)
            .delete(`/media/${create.body.data.id}`);

        expect(res.status).toBe(200);
    });

    it("should can't delete image (404)", async () => {
        const create = await supertest(web)
            .post("/media")
            .send({
                image: readFileSync,
            });

        const res = await supertest(web)
            .delete(`/media/${create.body.data.id+1}`);

        expect(res.status).toBe(404);
    });
});