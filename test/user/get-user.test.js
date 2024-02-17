import supertest from "supertest";
import {web} from "../../src/app/web.js";
import {authHeader} from "./update.test.js";

describe("User Service: get user endpoint testing", () => {
    it("should can get user", async () => {
        const res = await supertest(web)
            .get("/users/2")
            .set(authHeader)

        expect(res.status).toBe(200)
        expect(res.body.data.email).toBe("ucup@test.com")
    })

    it("should can't get user (409)", async () => {
        const res = await supertest(web)
            .get("/users/2")
            // .set(authHeader)

        expect(res.status).toBe(401)
    })
})