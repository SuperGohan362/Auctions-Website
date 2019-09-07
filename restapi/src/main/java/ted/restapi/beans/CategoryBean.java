package ted.restapi.beans;

import ted.restapi.persistence.dao.CategoryDAO;
import ted.restapi.persistence.entities.Category;
import ted.restapi.persistence.entities.Item;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.List;

@Stateless
@LocalBean
public class CategoryBean {
    @Inject private CategoryDAO categoryDAO;

    public List<Category> getAll(){ return categoryDAO.getAll(); }

    public Category findById(int id) { return categoryDAO.findById(id); }

    public List<Item> getItemsByCategoryId(int categoryId){
        return categoryDAO.findByCategoryId(categoryId).getItems();
    }
}
