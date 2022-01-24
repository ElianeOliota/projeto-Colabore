package br.com.devs2blu.projeto.colabore.colabore.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
 

import br.com.devs2blu.projeto.colabore.colabore.model.Usuario;
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	 
	@Query(value = " SELECT * FROM usuario WHERE  email=?1 and senha=?2 ", nativeQuery = true)
	public Optional<Usuario> logar( String email,String senha);	

}
