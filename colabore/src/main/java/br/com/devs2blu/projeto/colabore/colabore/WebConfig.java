package br.com.devs2blu.projeto.colabore.colabore;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("*") 
        .allowedMethods("GET","POST","PUT", "DELETE");
		
		registry.addMapping("/hospede/**")
		.allowedOrigins("*") 
        .allowedMethods("GET","POST","PUT", "DELETE");
	}
}