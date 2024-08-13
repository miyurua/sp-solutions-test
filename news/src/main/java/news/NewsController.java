package news;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class NewsController {
    public NewsRepository newsRepository;

    public NewsController(NewsRepository newsRepository){
        this.newsRepository = newsRepository;
    }

    @GetMapping("/")
    List<News> findAll() {
        return newsRepository.findAll();
    }

}
