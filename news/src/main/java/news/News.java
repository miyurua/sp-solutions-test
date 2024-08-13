package news;

public class News {
    Integer newsId;
    String headline;
    NewsCategory newsCategory;
    String newsContent;

    public News(Integer newsId, String headline, NewsCategory newsCategory, String newsContent){
        this.newsId = newsId;
        this.headline = headline;
        this.newsCategory = newsCategory;
        this.newsContent = newsContent;
    }

    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public NewsCategory getNewsCategory() {
        return newsCategory;
    }

    public void setNewsCategory(NewsCategory newsCategory) {
        this.newsCategory = newsCategory;
    }

    public String getNewsContent() {
        return newsContent;
    }

    public void setNewsContent(String newsContent) {
        this.newsContent = newsContent;
    }

    @Override
    public String toString() {
        return "News{" +
                "newsId=" + newsId +
                ", headline='" + headline + '\'' +
                ", newsCategory=" + newsCategory +
                ", newsContent='" + newsContent + '\'' +
                '}';
    }
}
