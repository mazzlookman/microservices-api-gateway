import mentorController from "../../../src/controller/course-service/mentor-controller.js";
import supertest from "supertest";
import {web} from "../../../src/app/web.js";

const createMentor = async () => {
    const res = await supertest(web)
        .post("/api/mentors")
        .send({
            name: "Test",
            profile: "test.png",
            profession: "UI/UX",
            email: "test@test.com"
        })

    return res.body.data
}

export {
    createMentor
}