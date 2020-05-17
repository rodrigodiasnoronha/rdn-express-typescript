import App from "../src";
import request from "supertest";

it("should be able to run the application", async () => {
    const response = await request.agent(App).get("/");

    expect(response.body.hello).toEqual("world");
    expect(response.status).toEqual(200);
});
