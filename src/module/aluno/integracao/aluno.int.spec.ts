import request from "supertest";

describe("INT - Aluno suite", () => {
  it("INT - ##GET/aluno", async () => {
    const response = await request("http://localhost:8080").get("/aluno");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  it("INT - ##POST/aluno", async () => {
    const response = await request("http://localhost:8080").post("/aluno")
    .send({
       nome: "Test_int 4",
       cpf: 123456789
    });

    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);

  });


  it("INT - ##POST/aluno", async () => {
    const response = await request("http://localhost:8080").post("/aluno")
    .send({
        nome:"",
        cpf: 987654321
    });

    expect(response.status).toBe(400)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.msg).toEqual("Verifique os dados pois nome e cpf são obrigatórios.")
    
  });
});
