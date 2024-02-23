import supertest from "supertest";
import {web} from "../../../src/app/web.js";
import {createMentor} from "./mentor-helper.js";

describe("Update mentor endpoint", () => {

    it("should can update mentor", async () => {
        const mentor = await createMentor()
        console.log(mentor)
        const res = await supertest(web)
            .patch(`/api/mentors/${mentor.id}`)
            .send({
                name: "Test Updated",
                email: "testupdated@test.com"
            })

        expect(res.status).toBe(200)
        expect(res.body.data.id).toBe(mentor.id)
        expect(res.body.data.email).toBe("testupdated@test.com")
    })
})