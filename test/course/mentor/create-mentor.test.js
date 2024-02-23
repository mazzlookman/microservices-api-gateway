import supertest from "supertest";
import {web} from "../../../src/app/web.js";

describe("Create mentor endpoint", () => {
    it('should can create mentor',async () => {
        const res = await supertest(web)
            .post("/api/mentors")
            .send({
                name: "Bagus",
                profile: "bagus.png",
                profession: "UI/UX",
                email: "bagus@test.com"
            })

        expect(res.status).toBe(200)
        expect(res.body.data.email).toBeDefined()
    })

    it("should can't create mentor (400)",async () => {
        console.log(process.env.COURSE_SERVICE_URL)
        const res = await supertest(web)
            .post("/api/mentors")
            .send({
                name: "",
                profile: "bagus.png",
                profession: "UI/UX",
                email: ""
            })

        expect(res.status).toBe(400)
        expect(res.body.data).toBeUndefined()
    })
})