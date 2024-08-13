package com.example.sp_task2.news;

import news.News;
import news.NewsCategory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NewsApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewsApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
			News news = new News(1, "headline 3", NewsCategory.LOCAL, "content");
			System.out.println("News: " + news.toString());
		};
	}
}
