use onroad; 

--- 
select idCliente, nome, telemovel, dataNascimento, ci.designacao, p.designacao From onroad.cliente as c
	inner join Cidade as ci 
		on c.cidade=ci.idCidade 
		inner join Pais as p
		on p.idPais=c.pais; 
        
        
    
-- Veiculos mais alugados e com que frequência
-- Frequência e Id
SELECT COUNT(AL.veiculo) as conta, AL.Veiculo
	FROM DWONROAD.TFALUGUER AS AL
	GROUP BY AL.Veiculo
	ORDER BY (COUNT(AL.Veiculo)) DESC;

-- Modelo Preferido
SELECT COUNT(V.Modelo) as NrAluguerModelo, V.Modelo, V.Marca
	FROM DWONROAD.TFALUGUER AS AL
		INNER JOIN DWONROAD.DIMVEICULO AS V
			ON AL.Veiculo = V.idVeiculo
	GROUP BY V.Modelo
    ORDER BY (COUNT(V.Modelo)) DESC;
    
-- Marca Preferida
SELECT COUNT(V.Marca) as NrAluguerMarca, V.Marca
	FROM DWONROAD.TFALUGUER AS AL
		INNER JOIN DWONROAD.DIMVEICULO AS V
			ON AL.Veiculo = V.idVeiculo
	GROUP BY V.Marca
    ORDER BY (COUNT(V.Marca)) DESC;


-- Épocas do ano com maior frequência de alugueres
-- Trimestre
SELECT COUNT(AL.idAluguer) as NrAlugueres, CA.Trimestre
	FROM DWONROAD.TFALUGUER AS AL
		INNER JOIN DWONROAD.DIMCALENDARIO AS CA
			ON AL.DataAluguer = CA.Data
	GROUP BY CA.Trimestre
    ORDER BY (COUNT(AL.idAluguer)) DESC;

-- Mes
SELECT COUNT(AL.AluguerId), CA.Mes
	FROM DWONROAD.TFALUGUERES AS AL
		INNER JOIN DWONROAD.DIMCALENDARIO AS CA
			ON AL.DataAluguer = CA.DataId
	GROUP BY CA.Mes
    ORDER BY (COUNT(AL.AluguerId)) DESC;    
    
  -- Para saber o tamanho da base de dados 
SELECT table_schema "dwonroad",
        ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) "DB Size in MB" 
FROM information_schema.tables 
GROUP BY table_schema;   
-- em MB
SELECT
SUM(ROUND(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2)) AS "SIZE IN MB"
FROM INFORMATION_SCHEMA.TABLES
WHERE
TABLE_SCHEMA = "dwonroad";

		