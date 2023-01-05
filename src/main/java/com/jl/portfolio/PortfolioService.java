package com.jl.portfolio;

import com.jl.portfolio.models.PortfolioItem;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Service class to get common data between portfolio items.<br>
 * Stores data in HashMap instead of fetching it from database. Data is constructed in @PostConstruct initData() method.
 * */
@Service
public class PortfolioService {

    /** Storage for portfolio page data*/
    private HashMap<String, PortfolioItem> portfolioMap;

    /**
     * Returns portfolio fragment template name.
     * @return Template name
     * */
    public String getPortfolioFragmentById(String id){
        return portfolioMap.get(id).getFragment();
    }

    /**
     * Returns item from the storage by id.
     * @param id ID of the item
     * @return PortfolioItem entry
     * */
    public PortfolioItem getItem(String id){
        return portfolioMap.get(id);
    }

    /**
     * Returns all items from storage as ArrayList.
     * @return all portfolio items
     * */
    public ArrayList<PortfolioItem> getPortfolioItemsAsList(){
        ArrayList<PortfolioItem> allItems = new ArrayList<>();
        for (String key: this.portfolioMap.keySet()) {
            allItems.add(portfolioMap.get(key));
        }
        return  allItems;
    }

    /**
     * Called after spring constructs this class. Fills storage with appropriate portfolio page data.
     * */
    @PostConstruct
    public void initData(){
        /* Fills page service with portfolio page data */
        portfolioMap = new HashMap<>();
        portfolioMap.put("0", new PortfolioItem(
                "/images/portfolio/catquiz/catquiz-index.webp",
                "Catquiz is a traditional quiz about cats. Still available. What is it? Catquiz was catsopinion.com blog's...",
                "catquiz.html",
                new String[]{"React", "Typescript", "Firebase",
                },
                "0",
                "CatQuiz"
        ));

        portfolioMap.put("1", new PortfolioItem(
                "/images/portfolio/catsopinion/catsopinion-thumbnail.webp",
                "Catsopinion.com was a blog and website of course about cats. I wrote about anything cat related, like history, food and even some anatomy...",
                "catsopinion.html",
                new String[]{"Vue.js", "Nuxt.js", "Firebase", "Heroku", "Aws"},
                "1",
                "Catsopinion.com"
        ));

        portfolioMap.put("2", new PortfolioItem(
                "/images/portfolio/catsadmin/catsadmin-index.webp",
                "Catsopinion admin software was a simple CMS system for one specific site. Image from the frontpage, note missing some buttons because not...",
                "catsadmin.html",
                new String[]{"C#", ".NET", "Firebase", "WPF", "Aws"},
                "2",
                "Catsopinion website admin software"
        ));

        portfolioMap.put("3", new PortfolioItem(
                "/images/portfolio/catvision/catvision-thumbnail.webp",
                "Catvision is another interactive addition for the blog. It presents visually differences between cats POV and humans POV. Overview of the...",
                "catvision.html",
                new String[]{"C#", "Unity", "Firebase",},
                "3",
                "Catvision"
        ));

        portfolioMap.put("4", new PortfolioItem(
                "/images/portfolio/raytracing/thumbnail.webp",
                "Goal was to showcase strengths of hdrp render pipeline. I created and modeled simple scene with hq textures...",
                "unityraytracing.html",
                new String[]{"C#", "Unity", "HDRP"},
                "4",
                "Unity ray-tracing"
        ));

        portfolioMap.put("5", new PortfolioItem(
                "/images/portfolio/footkin/menu.webp",
                "This was a game jam project that i made together with 3 other people. Theme was halloween...",
                "footkin.html",
                new String[]{"C#", "Unity", "URP"},
                "5",
                "Footkin's halloween revenge"
        ));

        portfolioMap.put("6", new PortfolioItem(
                "/images/portfolio/kirjasto/menu.webp",
                "Me and three other student made this for a library, our goal was to bring library to game...",
                "library.html",
                new String[]{"C#", "Unity", "URP"},
                "6",
                "Virtuaalikirjasto"
        ));
    }
}
