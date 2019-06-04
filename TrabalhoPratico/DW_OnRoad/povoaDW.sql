use onroad; 
SET @@global.time_zone = '+00:00';
SET @@session.time_zone = '+00:00';

Select date(al.dataAluguer), al.Cliente, al.Veiculo, al.precoAluguer 
	FROM onroad.Aluguer as al; 
  
 -- povoamento inicial da tabela dim-Cliente
insert into `DW_OnRoad`.`Dim-Cliente` 
	select idCliente, nome, telemovel, dataNascimento, cidade, pais
	From onroad.cliente; 
    
select * from  `DW_OnRoad`.`Dim-Cliente`;  

 -- povoamento inicial da tabela dim-Veiculo  
INSERT INTO `DW_OnRoad`.`Dim-Veiculo`
		select idVeiculo, matricula, nr_Kms, modelo, marca
        From onroad.veiculo; 
        
select * from `DW_OnRoad`.`Dim-Veiculo`;  

INSERT INTO `DW_OnRoad`.`Dim-Calendario`
Select distinct (al.dataAluguer), 
	concat(YEAR(al.dataAluguer), '-', MONTHNAME(al.dataAluguer)), 
    concat(YEAR(al.dataAluguer),'-', quarter(al.dataAluguer)),
    YEAR(al.dataAluguer)
	FROM onroad.ALUGUER AS al
    order by (al.dataAluguer); 
    
  -- case is null   
    
Select * from `DW_OnRoad`.`Dim-Calendario`;    


-- povoamento inicial da tabela de factos Aluguer 
 Insert into `DW_OnRoad`.`TF-Aluguer` 
	Select al.idAluguer, date(al.dataAluguer), al.Cliente, al.Veiculo, al.precoAluguer 
	FROM onroad.Aluguer as al; 
    
SELECT * FROM `DW_OnRoad`.`TF-Aluguer`; 

select * from onroad.Aluguer; 

-- Análise de dados: qual o carro mais alugado 

-- Limpeza do DW 
-- TRUNCATE `DW_OnRoad`.`TF-Aluguer`
-- TRUNCATE `DW_OnRoad`.`Dim-Calendario`
-- TRUNCATE `DW_OnRoad`.`Dim-Veiculo`
-- TRUNCATE `DW_OnRoad`.`Dim-Cliente`

-- 1 A TABELA DE FACTOS 


 


        
    
    
    
    