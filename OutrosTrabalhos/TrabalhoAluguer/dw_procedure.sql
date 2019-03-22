use dw;

drop procedure if exists update_cliente;

DELIMITER $$
create procedure update_cliente(
										in in_nif varchar(45),
										in in_profissao varchar(45),
                                        in in_cidade varchar(45),
                                        in in_pais varchar(45),
										in in_idade int,
                                        in in_ult_atualizacao date
								  )
begin
	
    declare idclienteC int;
    declare profC varchar(45);
    declare cidadeC varchar(45);
    declare paisC varchar(35);
    declare last_update date;
    declare aux int;
    
    declare erro bool default 0;
	declare continue handler for sqlexception set erro=1;
	
    start transaction;
    
    select idCliente into aux from dim_Cliente where idCliente = in_idcliente and idade != in_idade;
    
    if aux is not null then
		
		update DIM_Cliente
			set idade = in_idade,
				ult_atualizacao = in_ult_atualizacao
			where idCliente = in_nif;
    end if;
    select profissao into profC from dim_Cliente where idCliente = in_nif limit 1;
    select cidade into cidadeC from dim_Cliente where idCliente = in_nif limit 1;
    select pais into paisC from dim_Cliente where idCliente = in_nif limit 1;
    select ult_atualiacao into last_update from dim_Cliente where idCliente = in_nif limit 1;
    
    insert into dim_Cliente_HST
		(idCliente,profissao,cidade,pais,ult_atualizacao)
    values
		(in_nif,profC,cidadeC,paisC,last_update);
    
    update dim_Cliente
		set cidade = in_cidade,
			pais = in_pais,
            ult_atualizacao= in_ult_atualizacao
        where idCliente = in_nif;

    if erro 
	then rollback;
	else commit;
	end if;

end $$
DELIMITER ;



drop procedure if exists update_veiculo;

DELIMITER $$
create procedure update_veiculo(
										in in_idVeiculo varchar(45),
                                        in in_preco FLOAT
								  )
begin
	
    declare idclienteC int;
    declare precoC FLOAT;
    declare last_update date;
    declare erro bool default 0;
	declare continue handler for sqlexception set erro=1;

    start transaction;
    
    select preco into precoC from dim_Veiculo where idVeiculo = in_idVeiculo limit 1;
    select ult_atualizacao into last_update from dim_Veiculo where idVeiculo = in_idVeiculo limit 1;
    
    insert into dim_Veiculo_HST
		(idVeiculo,preco,ult_atualizacao)
    values
		(in_idVeiculo,precoC,last_update);
    

    if erro 
	then rollback;
	else commit;
	end if;

end $$
DELIMITER ;