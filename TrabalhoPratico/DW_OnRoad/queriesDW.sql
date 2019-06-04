use onroad; 

select idCliente, nome, telemovel, dataNascimento, ci.designacao, p.designacao From onroad.cliente as c
	inner join Cidade as ci 
		on c.cidade=ci.idCidade 
		inner join Pais as p
		on p.idPais=c.pais; 
		