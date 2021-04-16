package com.example.InternetShop.config;

import com.example.InternetShop.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserService userDetailsService;
    @Autowired
    private JwtFilter jwtFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("user").password("user").roles("USER")
                .and().withUser("MANAGER").password("MANAGER").roles("MANAGER")
                .and().and().userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable().cors().disable().authorizeRequests()
                .antMatchers(HttpMethod.GET, "/").permitAll()
                .antMatchers(HttpMethod.GET, "/product").permitAll()
                .antMatchers(HttpMethod.GET, "/product/**").permitAll()
                .antMatchers(HttpMethod.POST, "/product").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers(HttpMethod.PUT, "/product/**").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers(HttpMethod.DELETE, "/product/**").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers(HttpMethod.POST, "/user").anonymous()
                .antMatchers(HttpMethod.POST, "/user/authenticate").anonymous()
                .antMatchers(HttpMethod.GET, "/user").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers(HttpMethod.GET, "/user/name").hasAnyRole("ADMIN", "MANAGER", "USER")
                .antMatchers(HttpMethod.PUT, "/user/changeRole/**").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/user/userId").authenticated()
                .antMatchers(HttpMethod.POST, "/basket").authenticated()
                .antMatchers(HttpMethod.GET, "/basket/**").authenticated()
                .antMatchers(HttpMethod.DELETE, "/basket/**").authenticated()
                .antMatchers(HttpMethod.POST, "/order").authenticated()
                .antMatchers(HttpMethod.GET, "/order").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers(HttpMethod.GET, "/order/statistics").hasAnyRole("ADMIN", "MANAGER")
                .antMatchers(HttpMethod.GET, "/order/userName").authenticated()
                .antMatchers(HttpMethod.PUT, "/order/status/**").hasAnyRole("MANAGER", "ADMIN")
                .antMatchers(HttpMethod.GET, "/order/find/**").hasAnyRole("MANAGER", "ADMIN")
                .antMatchers(HttpMethod.GET, "/order/statistics").hasAnyRole("MANAGER", "ADMIN")
                .antMatchers(HttpMethod.DELETE, "/order/delete/**").authenticated()
                .and()
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
