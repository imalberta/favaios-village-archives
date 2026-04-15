export interface DeceasedRecord {
  id: number;
  nome: string;
  idade: number;
  sexo: "M" | "F";
  estadoCivil: string;
  causaMorte: string;
  dataObito: string;
  naturalidade: string;
  localSepultura: string;
  pai: string;
  mae: string;
  observacoes?: string;
}

export const deceasedRecords: DeceasedRecord[] = [
  { id: 1, nome: "Manuel da Silva Pereira", idade: 72, sexo: "M", estadoCivil: "Casado", causaMorte: "Pneumonia", dataObito: "1926-01-14", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "António da Silva", mae: "Maria Pereira" },
  { id: 2, nome: "Rosa de Jesus Cardoso", idade: 58, sexo: "F", estadoCivil: "Viúva", causaMorte: "Tuberculose", dataObito: "1926-03-22", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "José Cardoso", mae: "Ana de Jesus" },
  { id: 3, nome: "João Baptista Ferreira", idade: 3, sexo: "M", estadoCivil: "Solteiro", causaMorte: "Sarampo", dataObito: "1926-05-08", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Francisco Ferreira", mae: "Elvira Baptista" },
  { id: 4, nome: "Amélia dos Santos Rodrigues", idade: 34, sexo: "F", estadoCivil: "Casada", causaMorte: "Parto", dataObito: "1926-07-19", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Joaquim dos Santos", mae: "Teresa Rodrigues" },
  { id: 5, nome: "António Mendes Pinto", idade: 81, sexo: "M", estadoCivil: "Viúvo", causaMorte: "Velhice", dataObito: "1926-09-03", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Carlos Mendes", mae: "Luísa Pinto" },
  { id: 6, nome: "Maria da Conceição Lopes", idade: 45, sexo: "F", estadoCivil: "Casada", causaMorte: "Febre tifóide", dataObito: "1927-02-11", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Alberto Lopes", mae: "Conceição Moreira" },
  { id: 7, nome: "Francisco Alves Teixeira", idade: 67, sexo: "M", estadoCivil: "Casado", causaMorte: "Doença cardíaca", dataObito: "1927-04-28", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Domingos Alves", mae: "Filomena Teixeira" },
  { id: 8, nome: "Joaquina Ribeiro Martins", idade: 0, sexo: "F", estadoCivil: "Solteira", causaMorte: "Nado-morto", dataObito: "1927-06-15", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "José Ribeiro", mae: "Mariana Martins" },
  { id: 9, nome: "Augusto de Sousa Costa", idade: 53, sexo: "M", estadoCivil: "Casado", causaMorte: "Acidente agrícola", dataObito: "1927-08-30", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Manuel de Sousa", mae: "Gertrudes Costa" },
  { id: 10, nome: "Emília Fernandes Oliveira", idade: 29, sexo: "F", estadoCivil: "Solteira", causaMorte: "Tuberculose", dataObito: "1928-01-05", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Pedro Fernandes", mae: "Rosália Oliveira" },
  { id: 11, nome: "Alfredo Gonçalves Moura", idade: 76, sexo: "M", estadoCivil: "Viúvo", causaMorte: "Pneumonia", dataObito: "1928-03-17", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Tomás Gonçalves", mae: "Albertina Moura" },
  { id: 12, nome: "Adelaide Pires Monteiro", idade: 41, sexo: "F", estadoCivil: "Casada", causaMorte: "Cancro", dataObito: "1928-06-22", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Ernesto Pires", mae: "Beatriz Monteiro" },
  { id: 13, nome: "José Maria Carvalho", idade: 1, sexo: "M", estadoCivil: "Solteiro", causaMorte: "Gastroenterite", dataObito: "1928-09-14", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Artur Carvalho", mae: "Cândida Maria" },
  { id: 14, nome: "Laurinda de Fátima Braga", idade: 63, sexo: "F", estadoCivil: "Viúva", causaMorte: "Doença cardíaca", dataObito: "1929-01-28", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Henrique Braga", mae: "Fátima de Jesus" },
  { id: 15, nome: "Carlos Alberto Pimentel", idade: 49, sexo: "M", estadoCivil: "Casado", causaMorte: "Cirrose", dataObito: "1929-04-10", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Virgílio Pimentel", mae: "Carolina Alberto" },
  { id: 16, nome: "Deolinda Soares Matos", idade: 87, sexo: "F", estadoCivil: "Viúva", causaMorte: "Velhice", dataObito: "1929-07-06", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Gaspar Soares", mae: "Idalina Matos" },
  { id: 17, nome: "Raul Domingues Fonseca", idade: 22, sexo: "M", estadoCivil: "Solteiro", causaMorte: "Afogamento", dataObito: "1930-02-18", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Silvestre Domingues", mae: "Palmira Fonseca" },
  { id: 18, nome: "Cremilde Baptista Neves", idade: 55, sexo: "F", estadoCivil: "Casada", causaMorte: "Pneumonia", dataObito: "1930-05-25", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Óscar Baptista", mae: "Leopoldina Neves" },
  { id: 19, nome: "Domingos Ferreira Lima", idade: 70, sexo: "M", estadoCivil: "Casado", causaMorte: "AVC", dataObito: "1930-08-12", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Adriano Ferreira", mae: "Engrácia Lima" },
  { id: 20, nome: "Ermelinda Coelho Magalhães", idade: 38, sexo: "F", estadoCivil: "Casada", causaMorte: "Tuberculose", dataObito: "1931-01-07", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Feliciano Coelho", mae: "Gracinda Magalhães" },
  { id: 21, nome: "Albino Moreira Ramos", idade: 5, sexo: "M", estadoCivil: "Solteiro", causaMorte: "Difteria", dataObito: "1931-04-19", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Custódio Moreira", mae: "Hermínia Ramos" },
  { id: 22, nome: "Virgínia Santos Correia", idade: 91, sexo: "F", estadoCivil: "Viúva", causaMorte: "Velhice", dataObito: "1932-03-14", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Belmiro Santos", mae: "Isaura Correia" },
  { id: 23, nome: "Germano Vieira Cunha", idade: 44, sexo: "M", estadoCivil: "Casado", causaMorte: "Acidente agrícola", dataObito: "1933-06-20", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Ludovico Vieira", mae: "Justina Cunha" },
  { id: 24, nome: "Olímpia Araújo Tavares", idade: 16, sexo: "F", estadoCivil: "Solteira", causaMorte: "Febre tifóide", dataObito: "1934-09-08", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Narciso Araújo", mae: "Quitéria Tavares" },
  { id: 25, nome: "Venâncio Pereira Machado", idade: 60, sexo: "M", estadoCivil: "Casado", causaMorte: "Cancro", dataObito: "1935-11-30", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Serafim Pereira", mae: "Umbelina Machado" },
  { id: 26, nome: "Piedade Loureiro Sampaio", idade: 73, sexo: "F", estadoCivil: "Viúva", causaMorte: "Pneumonia", dataObito: "1936-02-14", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Xavier Loureiro", mae: "Zulmira Sampaio" },
  { id: 27, nome: "Heliodoro Costa Barbosa", idade: 31, sexo: "M", estadoCivil: "Casado", causaMorte: "Tuberculose", dataObito: "1937-05-22", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Amândio Costa", mae: "Benvinda Barbosa" },
  { id: 28, nome: "Felismina Rocha Nogueira", idade: 48, sexo: "F", estadoCivil: "Casada", causaMorte: "Doença cardíaca", dataObito: "1938-08-09", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Delfim Rocha", mae: "Etelvina Nogueira" },
  { id: 29, nome: "Teodoro Marques Azevedo", idade: 85, sexo: "M", estadoCivil: "Viúvo", causaMorte: "Velhice", dataObito: "1939-04-17", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Florêncio Marques", mae: "Generosa Azevedo" },
  { id: 30, nome: "Isaura Pinto Guimarães", idade: 26, sexo: "F", estadoCivil: "Solteira", causaMorte: "Parto", dataObito: "1940-10-03", naturalidade: "Favaios", localSepultura: "Cemitério de Favaios", pai: "Hermenegildo Pinto", mae: "Josefa Guimarães" },
];
