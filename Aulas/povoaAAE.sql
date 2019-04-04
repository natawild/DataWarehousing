use mydb; 
-- drop database mydb;
INSERT INTO `mydb`.`Dim-Cliente` (`Cliente`, `Designacao`,`Atividade`)
VALUES (1,'Samuel Francisco','atividade1'),
		(2,'Ana Marques','atividade2'); 
        
INSERT INTO  `mydb`.`Dim-Calendario` (`Data`,`Semana`,`DiaSemana`,`Mes`,`Trimestre`,`Ano`)
VALUES ('2018-01-21','2018-04','Domingo','janeiro','2018-1',2018),
	   ('2018-01-20','2018-04','Sábado','janeiro','2018-1',2018),
       ('2019-04-03','2019-14','Quarta','abril','2019-2',2019),
       ('2019-04-04','2019-14','Quinta','abril','2019-2',2019),
       ('2019-04-05','2019-14','Sexta','abril','2019-2',2019);
       
       
INSERT INTO `mydb`.`Dim-Equipa` (`Equipa`)
VALUES(1),
	  (2);
       
       
INSERT INTO `mydb`.`Dim-Tecnico` (`Tecnico`,`Designacao`,`Categoria`)
VALUES (1,'Daniel Sousa','categoria1'),
	   (2,'Ana Ferreira','catgoria2'),
	   (3,'Carolina Silva','catgoria3'),
       (4,'Márcia Costa','catgoria4'),
       (5,'Joaquim Teles','catgoria2'),
	   (6,'Orlando Belo','categoria5');
  

INSERT INTO `mydb`.`Brd-EquipaTecnico` (`Equipa`,`Tecnico`)
VALUES  (1,1),
	    (1,5),
		(1,2),
		(2,3),
		(2,2),
		(2,4);
        
INSERT INTO `mydb`.`TF-Pedidos` (`DataPedido`,`DataInicio`,`DataFim`,`Cliente`,`Equipa`)
VALUES ('2019-04-03','2019-04-04','2019-04-05',1,2),
	   ('2018-01-20','2018-01-20','2018-01-21',2,1);
       
       
 SELECT *
 FROM `mydb`.`TF-Pedidos`;
 
  SELECT *
 FROM  `mydb`.`Dim-Calendario`;
 
 SELECT designacao
 FROM `mydb`.`Dim-Tecnico`
 WHERE Tecnico=6;
 
 
  SELECT designacao
 FROM `mydb`.`Dim-Tecnico`
 WHERE Tecnico=6;
 
 
       