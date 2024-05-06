import { Aluno } from "../aluno.model";

describe("UNI - aluno.model", () => {
   let knexServiceMock: any;

  const knexMock = () => {
    return {
      select: jest.fn().mockReturnValueOnce([]),
      insert: jest.fn().mockReturnValueOnce([1]),
    };
  };

  knexServiceMock = {
    conectar: jest.fn(() => knexMock),
  };

  it("UNI - deve retornar valores da tabela alunos", async () => {
    const aluno = new Aluno(knexServiceMock);

    const response = await aluno.getAll();

    expect(response).toBeTruthy();
    expect(response.length).toBe(0);
  });

  it("UNI - deve salvar um cadastro de aluno na tabela", async () => {
     const aluno = new Aluno(knexServiceMock);

     const response = await aluno.store({
        nome: "Aluno 1",
        cpf: 123456789,
     });

     expect(response).toBeTruthy();
     expect(response).toEqual([1])

  });
});
