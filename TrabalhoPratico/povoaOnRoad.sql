USE `roadTrip` ;

INSERT INTO `Pais` (`idPais`, `designacao`) 
VALUES (1, 'Portugal'), 
(idPais, 'China'), (idPais, 'Espanha'), (idPais, 'Argentina'), (idPais, 'Franca'),
(idPais, 'Canadá'), (idPais, 'Croácia'), (idPais, 'Suécia'), (idPais, 'Brasil'),
(idPais, 'Luxemburgo'), (idPais, 'Alemanha'),
(idPais, 'Inglaterra'), (idPais, 'Argélia'), (idPais, 'Austria'), (idPais, 'Belgica');
 
 INSERT INTO `Seguro` (`idSeguro`, `dataValidade`, `precoSeguro`, `descricao`) 
 VALUES (1, '2019-12-16', '5.60', 'A - Seguro contra todos os riscos'),
(idSeguro, '2020-11-19', '3.30', 'B - seguro contra danos'),  (idSeguro, '2018-11-05', '2.80', 'C - seguro pobre');

INSERT INTO `Cidade` (`idCidade`, `designacao`, `pais`) 
VALUES (1, ' Coimbra', 1), (idCidade, ' Leiria', 1), (idCidade, ' Guimaraes', 1), 
(idCidade, ' Silves', 1), (idCidade, ' Tomar', 1), (idCidade, ' Beja', 1), (idCidade, ' Viana do Castelo', 1), 
(idCidade, ' Tavira', 1),(idCidade, ' Cascais', 1), (idCidade, ' Portalegre', 1), (idCidade, ' Lisboa', 1), (idCidade, ' Viseu', 1),
 (idCidade, ' Barcelos', 1), (idCidade, ' Vila Nova de Famalicão', 1), (idCidade, ' Aveiro', 1), (idCidade, ' Faro', 1), 
 (idCidade, ' Sintra', 1), (idCidade, ' Elvas', 1), (idCidade, ' Albufeira', 1), (idCidade, ' Lagos', 1), (idCidade, ' Almada', 1), 
 (idCidade, ' Évora', 1), (idCidade, ' Guimaraes', 1), (idCidade, ' Porto', 1), (idCidade, ' Maia', 1), (idCidade, ' Paris', 5), (idCidade, ' Londres', 12);

INSERT INTO `Veiculo` (`idVeiculo`, `matricula`, `precoEmNovo`, `marca`, `modelo`, `nr_Kms`, `anoCompra`, `taxaDesvalorizacao`) 
VALUES (1, '47-WT-55', '25000.00', 'Fiat', 'Punto', '1056.00', '2018-05-20', '0.050'), 
(idVeiculo, '47-RS-25', '30000.00', 'Mercedes', 'cla', '1000.00', '2017-04-19', '0.100'), 
(idVeiculo, '47-RS-26', '50000.00', 'Mercedes', 'gla', '10000.00', '2018-02-10', '0.100'), 
(idVeiculo, '50-20-RS', '27000.00', 'Seat', 'Ibiza', '110.00', '2017-01-01', '0.060'), 
(idVeiculo, '47-rs-30', '18000.00', 'Kia', 'f', '10.00', '2016-04-20', '0.070'), 
(idVeiculo, '47-QP-47', '26000.00', 'Hyundai', 'i20', '100.00', '2016-09-19', '0.500'), 
(idVeiculo, '47-WE-80', '54000.00', 'Hyundai', 'i30', '2000.00', '2017-04-22', '0.500'), 
(idVeiculo, '25-PZ-99', '25000.00', 'Renault', 'Captur', '2000.00', '2016-03-17', '0.300'), 
(idVeiculo, '83-RJ-26', '30000.00', 'Renault', 'Megane', '200.00', '2016-05-20', '0.300'), 
(idVeiculo, '04-WE-OP', '33000.00', 'Ford', 'Fiesta', '33600.00', '2016-02-02', '0.800'), 
(idVeiculo, '85-RX-56', '28000.00', 'Tesla', 'Model S', '100.00', '2018-01-20', '0.0050'), 
(idVeiculo, '25-99-PZ', '25000.00', 'Tesla', 'Model X', '200.00', '2018-01-20', '0.0050'), 
(idVeiculo, '42-TW-39', '60000.00', 'Toyota', 'CHR', '10.00', '2018-05-10', '0.050'), 
(idVeiculo, '99-XY-20', '90000.00', 'Toyota', 'CHR', '110.00', '2018-05-10', '0.050'), 
(idVeiculo, '47-QX-19', '17000.00', 'Ford', 'Focus', '110.00', '2018-05-10', '0.040'), 
(idVeiculo, '47-YY-30', '19500.00', 'Toyota', 'yaris', '289.00', '2018-05-10', '0.090'), 
(idVeiculo, '47-ZZ-50', '28900.00', 'Renault', 'Zoe', '2223.00', '2018-05-10', '0.008'); 


INSERT INTO `Cliente` (`idCliente`, `nome`, `nif`, `dataNascimento`, `pais`, `cidade`, `rua`, `cartaConducao`, `email`, `telemovel`) 
VALUES (1, 'Célia Figueiredo', '262646080', '1993-12-24', '1', '13', 'rua da Costa', 1,'a@gmail.com','912345678'), 
(idCliente, 'Rita Pereira', '262646080', '1984-05-06', '1', '12', 'rua da rita', 1,'a@gmail.com','912345678'), 
(idCliente, 'Manuela Ferreira Leite', '112646080', '1965-12-24', '1', '14', 'rua da Costa', '1','a@gmail.com','912345678'), 
(idCliente, 'Márcia Figueiredo', '262646080', '1994-01-21', '1', '3', 'rua do pinheiro', 1,'a@gmail.com','912345678'),
(idCliente, 'Junior', '262646080', '1993-12-24', '1', '15', 'rua da Costa', 1,'a@gmail.com','912345678'), 
(idCliente, 'Pedro', '262646080', '1993-12-24', '1', '16', 'rua da Costa', 1,'a@gmail.com','912345678'), 
(idCliente, 'Marco', '262646080', '1993-12-24', '1', '17', 'rua da Costa', 1,'a@gmail.com','912345678'), 
(idCliente, 'Luis', '262646080', '1993-12-24', '1', '18', 'rua da Costa', 1,'a@gmail.com','912345678'), 
(idCliente, 'Ricardo', '262646080', '1993-12-24', '1', '19', 'rua da Costa', 1,'a@gmail.com','91234544'), 
(idCliente, 'Joana', '262646080', '1993-12-24', '1', '20', 'rua da Costa', 1,'a@gmail.com','934567098'), 
(idCliente, 'Margarida', '262646080', '1993-12-24', '1', '21', 'rua da Costa', 1,'a@gmail.com', '987654909'), 
(idCliente, 'Juliana', '262646080', '1993-12-24', '1', '22', 'rua da Costa', 1,'a@gmail.com','900000'), 
(idCliente, 'Cristina', '262646080', '1993-12-24', '1', '23', 'rua da Costa', 1,'a@gmail.com','7000000'), 
(idCliente, 'Maria', '262646080', '1993-12-24', '1', '24', 'rua da Costa', 1,'a@gmail.com','90000000'), 
(idCliente, 'Josefina Catarro', '262646080', '1993-12-24', '1', '25', 'rua da Costa', 1,'a@gmail.com','9000000'), 
(idCliente, 'José Carlos Malato', '262246080', '1993-12-24', '1', '17', 'rua da Costa', 1,'a@gmail.com','923454444'), 
(idCliente, 'Catalina Pestana', '232646080', '1980-12-24', '1', '11', 'rua da Costa', 1,'a@gmail.com','912223345'), 
(idCliente, 'António Costa', '342645080', '1974-12-24', '1', '11', 'rua da Costa', 1,'a@gmail.com','912227777'), 
(idCliente, 'José Socrates', '782666080', '1970-12-24', '1', '11', 'rua da Costa', 1,'a@gmail.com','967778889'), 
(idCliente, 'Luis Montenegro', '197646080', '1971-01-13', '1', '11', 'rua da Costa', 0,'a@gmail.com','922222787') ; 


INSERT INTO `Funcionario` (`idFuncionario`, `data_contrato`, `salario`, `telemovel`, `email`, `nome`, `cidade`,`pais`, `rua`,`dataNascimento`, 
`FuncionarioSuperior`) 
VALUES (1, '2008-12-24', '1000.00', '933337717', 'celianatalia@gmail.com', 'Natália Lemos', 13, 1,'rua da Costa','1994-12-24', null), 
(idFuncionario, '2015-12-24', '1300.00', '933337717', 'celia@gmail.com', 'Celia Costa', 13, 1,'rua da Costa','1990-12-24', null),
(idFuncionario, '2017-01-24', '900.00', '963126799', 'socrates@gmail.com', 'Socrates Lemos', 11, 1,'rua da Penuria', '1991-12-24',1),
(idFuncionario, '2018-12-24', '800.00', '913336617', 'mendes@gmail.com', 'Fernando Mendes', 13, 1,'rua do preco certo','1987-12-24', 2), 
(idFuncionario, '2018-12-24', '850.00', '924447717', 'pedro@gmail.com', 'Pedro Mexia', 13, 1,'rua do mexia', '1989-12-24',1); 


INSERT INTO `Aluguer` (`idAluguer`, `dataAluguer`, `dataPrevistaLevantamento`, `dataPrevistaEntrega`, 
`dataRealEntrega`, `Cliente`, `Veiculo`,`precoAluguer`, `kmsPercorrido`, `Seguro`,`Funcionario`, `caucao`) 
VALUES (1, '2018-12-26', '2018-12-30', '2019-01-13', '2019-01-13', 11, 1,250.00, 900.00,1,2,500), 
(idAluguer, '2018-06-24', '2018-06-30', '2018-07-24', NULL, 2, 2,250.00, 800.00,1,2,500),
(idAluguer, '2018-06-01', '2018-06-07', '2018-06-30', '2018-06-30', 12, 3,250.00, 600.00,1,1,500),
(idAluguer, '2018-01-24', '2018-02-24', '2018-03-24', '2018-03-24', 2, 4,250.00, 0,2,1,500),
(idAluguer, '2018-04-24', '2018-05-24', '2018-06-24', '2018-06-24', 13, 5,250.00, 0.00,2,1,500),
(idAluguer, '2018-12-24', '2018-12-24', '2019-03-24', '2019-03-24', 2, 6,250.00, 234.00,2,2,500),
(idAluguer, '2017-06-13', '2017-07-01', '2017-07-29', '2017-07-30', 14, 7,250.00, 3455.00,1,1,500),
(idAluguer, '2018-06-24', '2018-07-24', '2018-08-15', '2018-08-15', 3, 8,250.00, 345.00,3,1,500),
(idAluguer, '2018-08-24', '2018-09-24', '2018-09-24', '2018-09-30', 3, 9,250.00, 698.00,1,1,500),
(idAluguer, '2017-12-21', '2018-01-03', '2018-01-24', '2018-01-24', 3, 10,250.00, 300.00,3,2,500),
(idAluguer, '2018-05-23', '2018-12-24', '2018-12-24', '2018-12-29', 15, 11,250.00, 235.00,1,1,500),
(idAluguer, '2018-12-24', '2018-12-24', '2019-01-24', null, 2, 12,250.00, 457.00,1,1,500),
(idAluguer, '2018-12-25', '2018-12-24', '2018-12-24', '2018-12-24', 4, 13,250.00, 345.00,1,1,500),
(idAluguer, '2018-05-26', '2018-05-27', '2018-06-01', '2018-06-01', 4, 14,250.00, 0,3,1,500),
(idAluguer, '2018-06-27', '2018-06-28', '2018-07-05', '2018-07-05', 15, 15,250.00, 0,1,1,500),
(idAluguer, '2018-06-12', '2018-06-24', '2018-06-30', '2018-06-30', 14, 16,250.00, 0,1,1,500),
(idAluguer, '2018-07-14', '2018-07-24', '2018-08-01', '2018-08-01', 13, 17,250.00, 666.00,3,1,500),
(idAluguer, '2018-12-01', '2018-12-10', '2018-12-24', '2018-12-24', 12, 1,250.00, 777.00,3,2,1500),
(idAluguer, '2018-06-04', '2018-06-24', '2018-07-24', '2018-07-24', 11, 1,250.00, 990.00,3,1,1500),
(idAluguer, '2017-01-24', '2017-02-24', '2017-03-24', '2017-03-24', 10, 11,250.00, 346.00,1,2,500),
(idAluguer, '2017-12-24', '2017-12-24', '2017-12-24', '2017-12-24', 11, 12,250.00, 678.00,3,1,500),
(idAluguer, '2017-12-24', '2017-12-24', '2017-12-24', '2017-12-24', 18, 17,250.00, 67.00,1,2,500),
(idAluguer, '2017-08-04', '2017-09-24', '2017-10-24', '2017-12-24', 12, 2,250.00, 56.00,2,3,500),
(idAluguer, '2017-06-03', '2017-06-24', '2017-07-04', '2017-07-04', 19, 3,250.00, 78.00,2,3,500),
(idAluguer, '2018-02-03', '2018-02-24', '2018-03-24', '2018-03-24', 13, 4,250.00, 77.00,2,4,500),
(idAluguer, '2018-07-04', '2018-07-24', '2018-07-30', '2018-07-30', 18, 5,250.00, 89.00,2,2,500),
(idAluguer, '2018-09-04', '2018-10-24', '2018-11-24', '2018-11-24', 17, 6,250.00, 443.00,1,4,500),
(idAluguer, '2018-12-24', '2018-12-24', '2018-12-24', NULL , 16, 7,250.00, 4567.00,1,3,500); 