package br.com.devs2blu.projeto.colabore.colabore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devs2blu.projeto.colabore.colabore.model.Usuario;
import br.com.devs2blu.projeto.colabore.colabore.repository.UsuarioRepository;

//@CrossOrigin(origins = "http://localhost:5500")
@RestController
@RequestMapping({"/usuarios"})
public class UsuarioController {
	
	private UsuarioRepository repository;
	
	public UsuarioController(UsuarioRepository repository) {
		
		this.repository = repository;
		
	}
	
	//C = create
	@PostMapping
	public Usuario criar(@RequestBody Usuario request) {
		
		return repository.save(request);
	}
	
	//R = read all
	
	@GetMapping
	public List listar() {
		
		return repository.findAll();
	}

	//R = read 0ne
	@GetMapping(path = { "/{id}" })
	public Optional<Usuario> buscarUsuario(@PathVariable long id){
		
		return repository.findById(id);
	}

	//U = update
	@PutMapping(path= {"/{id}"})
	public boolean atualizar(@PathVariable long id ,@RequestBody Usuario request) {
		
		Optional<Usuario> busca= repository.findById(id);
		if(busca != null) {
			
			request.setId(id);
			repository.save(request);
			return true;
		}else {
			return false;
		}
	}
	
	//D = delete
	@DeleteMapping(path= {"/{id}"})
	public boolean deletar (@PathVariable long id) {
		
		Optional<Usuario> busca = repository.findById(id);
		if(busca != null) {
			repository.deleteById(id);
			return true;
			
		}else {
			
			return false;
		}
		
	}
	
	// Customizados
	
	@PostMapping(path = { "/logar" })
	public Optional<Usuario> logar(@RequestBody Usuario request){
		
		return repository.logar(request.getEmail(),request.getSenha());
	}
	
}
