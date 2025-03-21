import java.util.ArrayList;
import java.util.List;

public class Carrinho {
    private List<Produto> produtos = new ArrayList<>();
    private double total;

    // Adicionar produto ao carrinho
    public void addProduto(Produto produto) {
        produtos.add(produto);
        calcularTotal();
    }

    // Remover produto do carrinho
    public void removeProduto(Produto produto) {
        produtos.remove(produto);
        calcularTotal();
    }

    // Calcular o total do carrinho
    public void calcularTotal() {
        total = 0;
        for (Produto produto : produtos) {
            total += produto.getPreco();
        }
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public double getTotal() {
        return total;
    }
}
