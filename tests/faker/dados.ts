import { faker } from '@faker-js/faker/locale/pt_BR';

export type DadosPerfil = {
    nome: string;
    email: string;
    senha: string;
    sobrenome: string;
    empresa: string;
    rua: string;
    ruaDois: string;
    cep: string;
    cidade: string;
    estado: string;
    celular: string;
}

export function gerarDadosPerfil(): DadosPerfil {

    return {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
        sobrenome: faker.person.lastName(),
        empresa: faker.company.name(),
        rua: faker.location.streetAddress(),
        ruaDois: faker.location.secondaryAddress(),
        cep: faker.location.zipCode(),
        cidade: faker.location.city(),
        estado: faker.location.state(),
        celular: faker.string.numeric(11)
    }
}