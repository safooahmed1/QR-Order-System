import HedTable from "@/components/table/HedTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CloudUpload, Flame, Leaf, Lightbulb, Sprout, Vegan } from "lucide-react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

type ProductFormValues = {
  image: File | null;
  productName: string;
  category: string;
  price: string;
  description: string;
  preferences: string[];
};

const preferenceOptions = [
  { label: "Vegan", value: "vegan", icon: Vegan },
  { label: "Gluten-Free", value: "glutenFree", icon: Leaf },
  { label: "Vegetarian", value: "vegetarian", icon: Sprout },
  { label: "Spicy", value: "spicy", icon: Flame },
];

export default function AddProduct() {
   const navigat = useNavigate()
  const formik = useFormik<ProductFormValues>({
    initialValues: {
      image: null,
      productName: "",
      category: "Starters",
      price: "",
      description: "",
      preferences: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const actions = [
    {
      label: "Cancel",
      className: "bg-green-900 text-white hover:bg-green-800",
      onClick: () => formik.resetForm(),
    },
    {
      label: "Save Changes",
      className: "bg-green-900 text-white hover:bg-green-800",
      onClick: () => formik.handleSubmit(),
    },
  ];



  return (
    <div className="min-h-screen bg-[#f7f7f7] px-6 py-6 text-[#0b2d2c]">
      <div className="mb-8 flex items-center gap-4">
        <Button className="size-10 bg-amber-50 text-black shadow-sm hover:bg-amber-100" size="icon"  onClick={()=>navigat("/menu")}>
          <ArrowLeft className="size-5" />
        </Button>
        <div className="w-full">
          <HedTable
            title="Add New Product"
            description="Configure details for a new item in your culinary collection."
            actions={actions}
          />
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="grid  grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="h-fit rounded-lg border border-[#cfd7d1] bg-white p-4 shadow-sm">
          <label
            htmlFor="product-photo"
            className="flex min-h-[234px] cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-[#c8d0cc] bg-[#fafafa] px-5 text-center transition hover:border-green-900 hover:bg-green-50/50"
          >
            <CloudUpload className="mb-3 size-7 text-[#243f43]" />
            <span className="text-sm font-bold text-[#243f43]">Upload Product Photo</span>
            <span className="mt-1 text-xs font-semibold text-[#243f43]">PNG, JPG up to 10MB</span>
            <span className="mt-5 rounded-md border border-[#aeb7b2] bg-white px-4 py-1.5 text-xs font-medium text-[#243f43] shadow-sm">
              Select File
            </span>
            <input
              id="product-photo"
              name="image"
              type="file"
              accept="image/png,image/jpeg"
              className="sr-only"
              onChange={(event) => formik.setFieldValue("image", event.currentTarget.files?.[0] ?? null)}
            />
          </label>
          <p className="mt-3 px-2 text-center text-[11px] font-bold italic leading-4 text-[#243f43]">
            High-quality dish photography increases sales by up to 24%
          </p>
        </section>

        <div className="space-y-4">
          <section className="rounded-lg border border-[#cfd7d1] bg-white p-5 shadow-sm">
            <h3 className="text-xl font-bold text-[#0b2d2c]">Product Specifications</h3>
            <div className="mt-2 h-px bg-[#cfd7d1]" />

            <div className="mt-4">
              <label htmlFor="productName" className="text-[11px] font-bold uppercase text-[#243f43]">
                Product Name
              </label>
              <input
                id="productName"
                name="productName"
                type="text"
                placeholder="e.g. Signature Truffle Risotto"
                value={formik.values.productName}
                onChange={formik.handleChange}
                className="mt-1 h-11 w-full rounded-md border border-[#cfd7d1] bg-white px-3 text-sm text-[#243f43] outline-none transition placeholder:text-[#737f91] focus:border-green-900 focus:ring-2 focus:ring-green-900/10"
              />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="category" className="text-[11px] font-bold uppercase text-[#243f43]">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  className="mt-1 h-11 w-full rounded-md border border-[#cfd7d1] bg-white px-3 text-sm text-[#243f43] outline-none transition focus:border-green-900 focus:ring-2 focus:ring-green-900/10"
                >
                  <option>Starters</option>
                  <option>Main Course</option>
                  <option>Desserts</option>
                  <option>Drinks</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="text-[11px] font-bold uppercase text-[#243f43]">
                  Price
                </label>
                <div className="mt-1 flex h-11 items-center rounded-md border border-[#cfd7d1] bg-white px-3 focus-within:border-green-900 focus-within:ring-2 focus-within:ring-green-900/10">
                  <span className="mr-3 text-sm font-bold text-[#243f43]">$</span>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    className="w-full bg-transparent text-sm text-[#243f43] outline-none placeholder:text-[#737f91]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="description" className="text-[11px] font-bold uppercase text-[#243f43]">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the flavors, ingredients, and presentation..."
                value={formik.values.description}
                onChange={formik.handleChange}
                className="mt-1 min-h-[110px] w-full resize-y rounded-md border border-[#cfd7d1] bg-white px-3 py-4 text-sm text-[#243f43] outline-none transition placeholder:text-[#737f91] focus:border-green-900 focus:ring-2 focus:ring-green-900/10"
              />
            </div>
          </section>


        </div>
      </form>
    </div>
  );
}
