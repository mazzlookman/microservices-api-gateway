import supertest from "supertest";
import {web} from "../../src/app/web.js";

const authHeader = {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJuYW1lIjoiVWN1cCIsImVtYWlsIjoidWN1cEB0ZXN0LmNvbSIsInByb2Zlc3Npb24iOiJGcm9udGVuZCIsImF2YXRhciI6InVjdXAucG5nIiwicm9sZSI6InN0dWRlbnQifSwiaWF0IjoxNzA4MTczOTM4LCJleHAiOjE3MDgxNzc1Mzh9.NeBWaO9QP_Q4Jgfpsfw2jEiJZXx7aci1MeP-sOyqU6A",
}
describe("User Service: Update user endpoint testing", () => {
    it("should can update", async () => {
        const res = await supertest(web)
            .patch("/users/2")
            .set(authHeader)
            .send({
                email: "ucup@test.com",
                name: "Ucup Ganteng",
                profession: "Still Alive"
            })

        expect(res.status).toBe(200)
        expect(res.body.data.name).toBe("Ucup Ganteng")
    })

    it("should can't update (401)", async () => {
        const res = await supertest(web)
            .patch("/users/2")
            // .set(authHeader)
            .send({
                email: "ucup@test.com",
                name: "Ucup Ganteng",
                profession: "Still Alive"
            })

        expect(res.status).toBe(401)
    })

    it("should can't update (409)", async () => {
        const res = await supertest(web)
            .patch("/users/2")
            .set(authHeader)
            .send({
                email: "aqib@test.com",
                name: "Ucup Ganteng",
                profession: "Still Alive"
            })

        expect(res.status).toBe(409)
    })

    it("should can't update (400)", async () => {
        const res = await supertest(web)
            .patch("/users/2")
            .set(authHeader)
            .send({
                email: "",
                name: "Ucup Ganteng",
                profession: "Still Alive"
            })

        expect(res.status).toBe(400)
    })
})
