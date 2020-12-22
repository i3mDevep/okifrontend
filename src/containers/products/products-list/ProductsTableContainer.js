import ProductsTable from "../../../components/products/products-list";
import { serviceListProducts } from "../../../services/products";

export default function ProductsTableContainer() {
  return (
    <div>
      <ProductsTable
        fndata={(query) =>
          new Promise(async (resolve, reject) => {
            console.log(query);
            let params =
              "?page=" +
              (query.page + 1) +
              "&per_page=" +
              query.pageSize +
              "&search=" +
              query.search;
            try {
              const result = await serviceListProducts(params);
              resolve({
                data: result.data.results,
                page: query.page,
                totalCount: result.data.count,
              });
            } catch (error) {
              reject(error);
            }
          })
        }
      />
    </div>
  );
}
