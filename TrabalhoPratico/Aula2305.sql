
Use roadtrip; 
-- Não me interessa quando devolveram, mas sim quando alugaram  
Select * from Aluguer;

Select dataAluguer, Cliente, Veiculo
FROM Aluguer; -- esta vista já me diz os dias em que se alugou carros, fazer o número de alugures por dia, 
-- quais foram os carros que foram alugados ao sábado 
-- saber os carros que foram alugados por localidade 
-- 
-- 10 veiculos mais rentaveis da loja 
Select date(al.dataAluguer), al.Cliente, al.Veiculo, al.precoAluguer 
	FROM Aluguer as al
    
		

 

