use ar;

drop procedure if exists inserir_cliente;
DELIMITER $$
create procedure inserir_cliente(
										in in_nif varchar(45),
										in in_profissao varchar(45),
                                        in in_cidade varchar(45),
                                        in in_pais varchar(45),
										in in_data_nascimento date,
                                        in in_operacao varchar(1)
									  )
BEGIN
			INSERT INTO AR_Dim_Cliente
				(idCliente,profissao,cidade,pais,idade,ultima_atualizacao)
			values
				(in_nif,in_profissao,in_cidade,in_pais,YEAR(FROM_DAYS(TO_DAYS(NOW())-TO_DAYS(in_data_nascimento))),curdate());
END $$
DELIMITER ;


drop procedure if exists inserir_veiculo;
DELIMITER $$
create procedure inserir_veiculo(
										in in_idVeiculo varchar(45),
										in in_marca varchar(45),
                                        in in_combustivel varchar(45),
                                        in in_preco FLOAT, 
										in in_numero_lugares INT
									  )
BEGIN
			INSERT INTO AR_Dim_Veiculo
				(idVeiculo,marca,combustivel,preco,numero_lugares)
			values
				(in_idVeiculo,in_marca,in_combustivel,in_preco,in_numero_lugares);
END $$
DELIMITER ;

drop procedure if exists inserir_aluguer;
DELIMITER $$
create procedure inserir_aluguer(
                                        in in_idCliente varchar(45), 
                                        in in_preco FLOAT,
                                        in in_data_inicio date,
										in in_idVeiculo varchar(45),
                                        in in_data_fim date
									  )
BEGIN
            
			INSERT INTO AR_Fact_Aluguer
				(numeroDias, preco, idCliente, data_inicio, idVeiculo, data_fim)
			values
				(datediff(in_data_fim, in_data_inicio), in_preco, in_idCliente, in_data_inicio, in_idVeiculo, in_data_fim);
END $$
DELIMITER ;




