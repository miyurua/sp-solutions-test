package news;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class NewsRepository {
    private List<News> news = new ArrayList<>();

    List<News> findAll() {
        return news;
    }

    @PostConstruct
    private void init() {
        news.add(new News(1, "Headline 1", NewsCategory.SPORTS, "content 1"));
        news.add(new News(2, "Headline 2", NewsCategory.ENTERTAINMENT, "content 2"));
    }
}
