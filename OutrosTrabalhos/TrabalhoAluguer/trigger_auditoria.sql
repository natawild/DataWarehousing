use dw_font;

SET SQL_SAFE_UPDATES = 0;

drop trigger if exists insert_cliente_auditoria;

Delimiter $$
create trigger insert_cliente_auditoria
after insert on Cliente
for each row
begin

insert into TA_Cliente
value (New.nif,New.contacto,New.profissao,New.nome,New.data_nascimento,New.idMorada,'I');

end $$
DELIMITER;


drop trigger if exists update_cliente_auditoria; 

Delimiter $$
create trigger update_cliente_auditoria
after update on Cliente
for each row
begin

insert into TA_Cliente
value (New.nif,New.contacto,New.profissao,New.nome,New.data_nascimento,New.idMorada,'U');

end $$
DELIMITER ;


drop trigger if exists insert_veiculo_auditoria; 

Delimiter $$
create trigger insert_veiculo_auditoria
after insert on Veiculo
for each row
begin

insert into TA_Veiculo
value (New.matricula,New.combustivel,New.preco,New.ano,New.marca,New.numero_lugares,'I');

end $$ 
DELIMITER ;


drop trigger if exists update_veiculo_auditoria; 

Delimiter $$
create trigger update_veiculo_auditoria
after update on Veiculo
for each row
begin

insert into TA_Veiculo
value (New.matricula,New.combustivel,New.preco,New.ano,New.marca,New.numero_lugares,'U');

end $$
DELIMITER ;


drop trigger if exists insert_aluguer_auditoria; 

Delimiter $$
create trigger insert_aluguer_auditoria
after insert on Aluguer
for each row
begin

insert into TA_Aluguer
value (New.idAluguer,New.data_inicio,New.preco,New.data_fim,New.idCliente,New.idVeiculo);

end $$
DELIMITER ;



